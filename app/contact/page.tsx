import Container from "@/components/std/Container";
import Spacer from "@/components/std/Spacer";
import Card from "@/components/Card";
import Column from "@/components/std/Column";
import Button from "@/components/std/Button";
import FaqAccordion from "@/components/FaqAccordion";
import Row from "@/components/std/Row";
import Input from "@/components/std/Inputs/Input";

import data from "./dummy";
import Link from "next/link";
import styles from "./contact.module.css";


export default function ContactPage() {
    const first_section_qa = data.first.map(el => (
        <>
            <FaqAccordion question={el.q} answer={el.a} />
            <Spacer top="2" />
        </>
    ));

    return (
        <Container wrapper>
            <main className={styles.main}>
                <Column>
                    <Card>
                        <h2>Обратная свзязь</h2>
                        <Spacer top="1.5" />
                        <p>
                            Вы также можете написать нам на E-mail:{" "}
                            <span className={styles.link}>
                                <a
                                    href="mailto:test@hr-company.com"
                                    className={styles.link}
                                >
                                    test@hr-company.org
                                </a>
                            </span>
                        </p>
                        <Spacer top="1.5" />
                        <p className="--mt2">
                            Пожулуйста обратите внимание на{" "}
                            <Link href={"/faq"}>
                                <span className={styles.link}>
                                    частые вопросы
                                </span>
                            </Link>
                            . Ниже некоторые из них. Если не найдете ответ на
                            свой вопрос, используйте форму для обращения в
                            поддерждку.
                        </p>
                    </Card>
                    <Card>
                        {first_section_qa}
                        <Spacer top="-2" />
                    </Card>
                </Column>

                <Card>
                    <form>
                        <Spacer top="1" />
                        <Input name="test" label="Ваш e-mail для ответа" type="email"/>
                        <Spacer top="1" />
                        <h3>Ваше сообщение</h3>
                        {/**textarea */}
                        <Spacer top="2" />

                        <Row>
                            <div></div>
                            <Button onClick={() => {}}>Отправить</Button>
                        </Row>
                    </form>
                </Card>
            </main>
        </Container>
    );
}
