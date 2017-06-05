##
# Modifica el layout de los mensajes de error de cada campo
ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|
  if html_tag =~ /^<label/
    %{#{html_tag}}.html_safe
  else
    %{<div class="field_with_errors">
      #{html_tag}
      <span class="help-block">#{instance.error_message.first}</span>
    </div>}.html_safe
  end
end
