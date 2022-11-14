import Link from 'next/link';
import styles from './navigation.module.css';
import Row from '@/components/std/Row';
import Spacer from '@/components/std/Spacer';
import Button from '@/components/std/Button';

type props = {
    hide_button?: boolean;
};

export default function Navigation(props: props) {
    return (
        <nav className={styles.nav}>
            <Row>
                <Link href="/find-work">
                    <p>Найти работу</p>
                </Link>
                <Spacer left="3" />
                <Link href="/find-workers">
                    <p>Найти сотрудников</p>
                </Link>
                {!props.hide_button && (
                    <Link href={'/login'}>
                        <Spacer left="4" />
                        <Button>
                            Войти
                        </Button>
                    </Link>
                )}
            </Row>
        </nav>
    );
}
