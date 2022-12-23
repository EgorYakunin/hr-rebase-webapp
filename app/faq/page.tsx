import Container from '@/components/std/Container';
import Spacer from '@/components/std/Spacer';
import Row from '@/components/std/Row';
import FaqAccordion from '@/components/FaqAccordion';

import styles from './faq.module.css';

export default function FaqPage() {
    return (
        <Container>
            <main className={styles.main}>
                <FaqAccordion question="mom ?" answer="yes"/>
            </main>
        </Container>
    );
}
