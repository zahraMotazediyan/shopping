import React from "react";
import {Link} from "react-router-dom";

///Css
import styles from "../../css/AboutUs.module.css";
////Icon
import teamWork from "../../icons/teamwork.png";
import illustration from "../../icons/illustration.png";
import group from "../../icons/group.jpg";
import groupF from "../../icons/group-friend.png";

const AboutUs = () => {
    return (
        <div className={styles.container_about}>
            <div className={styles.We_about}>
                <img className={styles.width_about} src={teamWork} alt="t_work"/>
                <h2>درباره ما</h2>
                <h4>
                    اسمارت شاپ را به چه می شناسید؟ اگر بخواهید یک خرید آنلاین انجام دهید اول از همه به کجا سر می زنید؟
                    ما کارمان را از فروش ساده کالاهای الکترونیک و دیجیتال شروع کردیم اما حالا بعد از 10 سال و اضافه شدن
                    بازوهای جدید به گروه اسمارت شاپ تلاش می‌کنیم با همراهی شما بهترین پلتفرم تجارت الکترونیک در خارمیانه
                    باشیم. برای تحقق این مأموریت به لبخند شما و ارزش‌هایی الهام بخش باور داریم</h4>
                <Link to="#">بیشتر بخوانید</Link>
            </div>
            <div className={styles.We_about}>
                <img className={styles.width_identity} src={illustration} alt="ill_ion"/>
                <h2>هویت ما</h2>
                <h4>
                    چه فروشنده اسمارت شاپ باشید، چه خریدار، اسمارت شاپ هویت خود را از شما وام گرفته است. آیا می‌دانید ما
                    چه چشم‌انداز و مأموریتی داریم و برای رسیدن به آنها چطور گام بر می‌داریم؟
                </h4>
                <Link to="#">بیشتر بخوانید</Link>
            </div>
            <div className={styles.We_about}>
                <img className={styles.width_history} src={group} alt="history"/>
                <h2>تاریخچه اسمارت شاپ</h2>
                <h4>
                    داستان فراز وفرودهای اسمارت شاپ پراز تجربه،چالش ویادگیری ست،از گسترش تیم اسمارت شاپ به هزاران
                    نفر
                    تاراه اندازی سرویس‌های جدید که همگی در کنار هم اسمارت شاپ را به یک برند ملی،باهوش و فناوری محور
                    تبدیل می‌کنند</h4>
                <Link to="#">بیشتر بخوانید</Link>
            </div>
            <div className={styles.We_about}>
                <img className={styles.width_group} src={groupF} alt="g_f"/>
                <h2>گروه اسمارت شاپ</h2>
                <h4> تجارت الکترونیک بر پایه تکنولوژی،هسته اصلی فعالیت اسمارت شاپ است اماآنچه اکنون جوهره گروه اسمارت
                    شاپ
                    را تشکیل می‌دهد اشتیاق و دغدغه برای خلق ارزش وکمک به توسعه اقتصاددیجیتال درایران است</h4>
                <Link to="#">بیشتر بخوانید</Link>
            </div>
        </div>
    )
}

export default AboutUs;