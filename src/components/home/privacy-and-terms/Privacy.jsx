import { Link } from "react-router-dom";
import Policy from "./policy/Policy";
import Heading from "./heading/Heading";
import Modal from "./modal/Modal";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  });
  return (
    <div className="bg-[#0a0a0a]">
      <Heading
        pageName="سياسة الخصوصية"
        icon={
          <svg
            className="w-8 h-8 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            ></path>
          </svg>
        }
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Modal
          title="خصوصيتك تهمنا"
          subTitle="نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه."
          color="orange"
          icon={
            <svg
              className="w-6 h-6 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              ></path>
            </svg>
          }
        />
        <div className="space-y-12">
          <Policy
            i="1"
            name="مقدمة"
            desc="مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك."
          />
          <Policy i="2" name="المعلومات التي نجمعها">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>
                  <strong className="text-white">بيانات الهوية:</strong> تشمل
                  الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.
                </span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>
                  <strong className="text-white">بيانات الاتصال:</strong> تشمل
                  عنوان البريد الإلكتروني.
                </span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>
                  <strong className="text-white">البيانات التقنية:</strong> تشمل
                  عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.
                </span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>
                  <strong className="text-white">بيانات الاستخدام:</strong> تشمل
                  معلومات حول كيفية استخدامك لموقعنا وخدماتنا.
                </span>
              </li>
            </ul>
          </Policy>
          <Policy i="3" name="كيف نستخدم معلوماتك">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>لتقديم خدمتنا والحفاظ عليها</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>لإخطارك بالتغييرات في خدمتنا</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>لتقديم دعم العملاء</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>لمراقبة استخدام خدمتنا</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>لاكتشاف ومنع ومعالجة المشاكل التقنية</span>
              </li>
            </ul>
          </Policy>
          <Policy
            i="4"
            name="ملفات تعريف الارتباط"
            desc="نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط
                على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو
                للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات
                تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا."
          />
          <Policy
            i="5"
            name="أمان البيانات"
            desc="لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو
                استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن
                نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية
                للمعرفة."
          />
          <Policy i="6" name="حقوقك">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>طلب الوصول إلى بياناتك الشخصية</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>طلب تصحيح بياناتك الشخصية</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>طلب مسح بياناتك الشخصية</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>الاعتراض على معالجة بياناتك الشخصية</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>طلب تقييد معالجة بياناتك الشخصية</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-circle-check text-orange-500 shrink-0 mt-0.5"></i>
                <span>الحق في سحب الموافقة</span>
              </li>
            </ul>
          </Policy>
          <Policy
            i="7"
            name="تواصل معنا"
            desc="إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:"
            additionalLink
          />
        </div>
        <div className="mt-16 pt-8 border-t border-[#262626]">
          <p className="text-neutral-500 text-sm text-center">
            باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً{" "}
            <Link
              className="text-orange-500 hover:text-orange-400 font-medium"
              to="/home/terms"
            >
              شروط الخدمة
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
