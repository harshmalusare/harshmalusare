function calculate() {
    const age = parseInt(document.getElementById('age').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(age) || age <= 0) {
        resultDiv.innerHTML = `<p style="color: red;">Please enter a valid age greater than 0.</p>`;
        return;
    }

    const months = age * 12;
    const days = age * 365;
    const hours = age * 8760;
    const minutes = age * 525600;

    resultDiv.innerHTML = `
        <p><strong>You spent months:</strong> ${months}</p>
        <p><strong>You spent days:</strong> ${days}</p>
        <p><strong>You spent hours:</strong> ${hours}</p>
        <p><strong>You spent minutes:</strong> ${minutes}</p>
    `;
}
