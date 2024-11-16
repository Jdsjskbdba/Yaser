// سيتم تفعيل هذا السكربت بشكل افتراضي مع وجود الأطباء في خيارات الراديو
const serviceSelect = document.getElementById('service');
const doctorSelect = document.getElementById('doctor');

const doctors = {
    "زراعة الأسنان": [
        { name: "د. أحمد علي", specialization: "زراعة الأسنان", img: "doctor1.jpg" },
        { name: "د. فاطمة محمود", specialization: "زراعة الأسنان", img: "doctor2.jpg" }
    ],
    "تقويم الأسنان": [
        { name: "د. سامي يوسف", specialization: "تقويم الأسنان", img: "doctor3.jpg" },
        { name: "د. ليلى حسين", specialization: "تقويم الأسنان", img: "doctor4.jpg" }
    ],
    "حشوات تجميلية": [
        { name: "د. علي الزبيدي", specialization: "حشوات تجميلية", img: "doctor5.jpg" },
        { name: "د. سعاد جاسم", specialization: "حشوات تجميلية", img: "doctor6.jpg" }
    ],
    "تنظيف الأسنان": [
        { name: "د. مريم ناصر", specialization: "تنظيف الأسنان", img: "doctor7.jpg" },
        { name: "د. حسن سعيد", specialization: "تنظيف الأسنان", img: "doctor8.jpg" }
    ]
};

serviceSelect.addEventListener('change', function() {
    doctorSelect.innerHTML = '<option value="">اختار الطبيب أولاً</option>';

    const selectedService = serviceSelect.value;
    if (doctors[selectedService]) {
        doctors[selectedService].forEach(function(doctor) {
            const option = document.createElement('option');
            option.value = doctor.name;
            option.textContent = `${doctor.name} - ${doctor.specialization}`;
            doctorSelect.appendChild(option);
        });
    }
});