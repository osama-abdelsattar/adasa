import Heading from "./heading/Heading";
import Modal from "./modal/Modal";
import { Link } from "react-router-dom";
import Policy from "../privacy-and-terms/policy/Policy";
import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div className="bg-[#0a0a0a]">
      <Heading
        pageName="شروط الخدمة"
        icon={<i className="far fa-file-lines fa-xl text-orange-500"></i>}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Modal
          title="إشعار مهم"
          subTitle="يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط."
          color="yellow"
          icon={
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          }
        />
        <div className="space-y-12">
          <Policy
            i="1"
            name="الموافقة على الشروط"
            desc="بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه."
          />
          <Policy i="2" name="رخصة الاستخدام">
            <p className="text-neutral-400 leading-relaxed mb-4">
              يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي
              غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.
            </p>
            <p className="text-neutral-300 font-medium mb-3">
              بموجب هذا الترخيص لا يجوز لك:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-xmark text-red-400 shrink-0 mt-0.5"></i>
                <span>تعديل أو نسخ المواد</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-xmark text-red-400 shrink-0 mt-0.5"></i>
                <span>استخدام المواد لأي غرض تجاري أو للعرض العام</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-xmark text-red-400 shrink-0 mt-0.5"></i>
                <span>محاولة فك أو عكس هندسة أي برنامج على الموقع</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-xmark text-red-400 shrink-0 mt-0.5"></i>
                <span>إزالة أي حقوق نشر أو علامات ملكية من المواد</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-xmark text-red-400 shrink-0 mt-0.5"></i>
                <span>نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر</span>
              </li>
            </ul>
          </Policy>
          <Policy
            i="3"
            name="إخلاء المسؤولية"
            desc='المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع الضمانات الأخرى.'
          />
          <Policy
            i="4"
            name="القيود"
            desc="في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على الموقع."
          />
          <Policy i="5" name="محتوى المستخدم">
            <p className="text-neutral-400 leading-relaxed mb-4">
              إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً غير
              حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه وتعديله
              وتوزيعه.
            </p>
            <p className="text-neutral-300 font-medium mb-3">
              يجب ألا يكون محتواك:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-xmark text-red-400 shrink-0 mt-0.5"></i>
                <span>أن يكون تشهيرياً أو فاحشاً أو مسيئاً</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-xmark text-red-400 shrink-0 mt-0.5"></i>
                <span>انتهاك حقوق الملكية الفكرية للآخرين</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-xmark text-red-400 shrink-0 mt-0.5"></i>
                <span>احتواء فيروسات أو أكواد ضارة</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-xmark text-red-400 shrink-0 mt-0.5"></i>
                <span>انتهاك أي قوانين أو لوائح معمول بها</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <i className="fas fa-xmark text-red-400 shrink-0 mt-0.5"></i>
                <span>الإعلان عن منتجات أو خدمات غير مصرح بها</span>
              </li>
            </ul>
          </Policy>
          <Policy
            i="6"
            name="التعديلات"
            desc="قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة."
          />
          <Policy
            i="7"
            name="معلومات الاتصال"
            desc="إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:"
            additionalLink
          />
        </div>
        <div className="mt-16 pt-8 border-t border-[#262626]">
          <p className="text-neutral-500 text-sm text-center">
            باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً{" "}
            <Link
              className="text-orange-500 hover:text-orange-400 font-medium"
              to="/home/privacy"
            >
              سياسة الخصوصية
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
