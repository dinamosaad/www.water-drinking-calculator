const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");

// حساب كمية الماء
calculateBtn.addEventListener("click", function () {
    const weight = parseFloat(weightInput.value);

    if (isNaN(weight) || weight <= 0) {
        resultDiv.textContent = "⚠️ يرجى إدخال وزن صحيح.";
        resultDiv.style.color = "red";
        return;
    }

    // الصيغة: يحتاج الشخص إلى 35 مل من الماء لكل كيلوغرام من الوزن.
    const waterIntake = (weight * 0.035).toFixed(2);

    // عرض النتيجة
    resultDiv.style.color = "white";
    resultDiv.innerHTML = `💧 تحتاج إلى شرب <span style="color: #00ffcc;">${waterIntake} لتر</span> من الماء يوميًا.`;
});