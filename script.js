function handleSubmit() {
  const input = document.getElementById("linkInput").value;
  if (!input.includes("ubereats")) {
    alert("Пожалуйста, вставьте корректную ссылку на Uber Eats.");
    return;
  }

  // Эмуляция ответа
  const originalPrice = 34.25;
  const discount = originalPrice * 0.5;
  const profit = 10;
  const finalPrice = (originalPrice - discount + profit).toFixed(2);

  document.getElementById("result").innerHTML = `
    🧾 Исходная сумма: $${originalPrice}<br />
    💸 Новая сумма со скидкой: <strong>$${finalPrice}</strong><br />
    ✅ Данные успешно обработаны.
  `;
}
