
const $ = id => document.getElementById(id);

// الرسالة
const msg = "نوران، عارف إن عيد ميلادك عدى، بس حبيت أعملك حاجة بسيطة ومختلفة. أتمنى تكوني بخير وتكون أيامك كلها جميلة، وتحققي كل اللي نفسك فيه. كل سنة وانتي طيبة، حتى لو متأخرة شوية. 💗";

let typingTimer;


// فتح المفاجأة
$("open").onclick = async () => {

    $("home").classList.add("hide");
    $("surprise").classList.remove("hide");

    $("gift").classList.add("open");

    // كتابة الرسالة تدريجياً
    $("message").textContent = "";

    let i = 0;

    clearInterval(typingTimer);

    typingTimer = setInterval(() => {

        $("message").textContent += msg[i];

        i++;

        if (i >= msg.length) {
            clearInterval(typingTimer);
        }

    }, 42);


    // تشغيل الموسيقى
    try {
        await $("music").play();
    } catch (error) {
        console.log("تعذر تشغيل الموسيقى");
    }

};


// الانتقال إلى معرض الصور
$("galleryBtn").onclick = () => {

    $("surprise").classList.add("hide");

    $("gallery").classList.remove("hide");

};


// الرجوع إلى الصفحة الرئيسية
$("backHome").onclick = () => {

    // إخفاء الصفحات الأخرى
    $("gallery").classList.add("hide");
    $("surprise").classList.add("hide");

    // إظهار الصفحة الرئيسية
    $("home").classList.remove("hide");

    // إعادة الهدية لحالتها الأصلية
    $("gift").classList.remove("open");

    // مسح الرسالة القديمة
    $("message").textContent = "";

    // إيقاف الكتابة التدريجية
    clearInterval(typingTimer);

    // الرجوع لأعلى الصفحة
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};


// زر الموسيقى
$("sound").onclick = async () => {

    const music = $("music");

    if (music.paused) {

        try {
            await music.play();
        } catch (error) {
            alert("تأكد إن ملف music.mp3 موجود داخل مجلد الموقع");
        }

    } else {

        music.pause();

    }

};


// تكبير الصور عند الضغط عليها
document.querySelectorAll(".photos img").forEach(img => {

    img.onclick = () => {

        $("large").src = img.src;

        $("viewer").classList.remove("hide");

    };

});


// إغلاق الصورة المكبرة
$("close").onclick = () => {

    $("viewer").classList.add("hide");

    $("large").src = "";

};


// الإغلاق عند الضغط خارج الصورة
$("viewer").onclick = event => {

    if (event.target.id === "viewer") {
        $("close").click();
    }

};


// الإغلاق بزر Escape
document.onkeydown = event => {

    if (event.key === "Escape") {
        $("close").click();
    }

};
