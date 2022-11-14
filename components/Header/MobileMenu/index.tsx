import Link from 'next/link';

type props = {
    show_login_button?: boolean;
};

export default function ModibleMenu(props: props) {
    return (
        <section className="mobile-menu">
            <Link href="/find-job">
                <p className="nav__link">Найти работу</p>
            </Link>
            <Link href="/find-workers">
                <p className="nav__link --middle-link">Найти сотрудников</p>
            </Link>
            {!props.show_login_button && (
                <Link href="/login">
                    <button className="nav__button --primary-btn">Войти</button>
                </Link>
            )}
        </section>
    );
}
