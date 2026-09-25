/**
 * Delivers an enquiry form to the Boston Motors WhatsApp number.
 *
 * The site is static, so nothing can send a message on the visitor's behalf.
 * Instead, a valid submission opens WhatsApp with the enquiry already written
 * out and addressed; the visitor taps send. The browser's own validation still
 * runs first — the submit event only fires once required fields are filled.
 *
 * Markup contract: <form data-whatsapp-form={waLink} data-subject="…">, where
 * every field has a <label for> whose text becomes its line in the message.
 */
for (const form of document.querySelectorAll<HTMLFormElement>('form[data-whatsapp-form]')) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const lines = [form.dataset.subject ?? 'Website enquiry', ''];
    for (const field of form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      'input[name], textarea[name], select[name]',
    )) {
      const value = field.value.trim();
      if (!value) continue;
      const label = form.querySelector(`label[for="${field.id}"]`)?.textContent?.trim() ?? field.name;
      // A question label ("What is this about?") needs no colon after it.
      const head = label.endsWith('?') ? label : `${label}:`;
      // Long answers go on their own line so the message stays readable.
      lines.push(field.tagName === 'TEXTAREA' ? `${head}\n${value}` : `${head} ${value}`);
    }

    const url = `${form.dataset.whatsappForm}?text=${encodeURIComponent(lines.join('\n'))}`;
    // A new tab keeps the filled-in page on desktop; phones hand straight to the
    // app. No 'noopener' feature here: with it, window.open always returns null
    // and the fallback would open WhatsApp a second time. The opener is cut
    // by hand instead.
    const opened = window.open(url, '_blank');
    if (opened) opened.opener = null;
    else window.location.href = url;
  });
}
