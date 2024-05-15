import { React, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './Builder.css';


function QuestionTemplate() {
    const [questionText, setQuestionText] = useState("");
    const [choices, setChoices] = useState([
        { key: 1, value: 'ответ 1', id: 0 },
        { key: 2, value: 'ответ 2', id: 1 },
        { key: 3, value: 'ответ 3', id: 2 }
    ]);

    function updateQuestionTextHandler(target) {
        setQuestionText(target.value)
    }

    function addChoice(choice) {
        setChoices([...choices, choice]);
        console.log(choices)
    }

    return (
        <div className="question-template">
            <div className="question-text">
                <Form.Label
                    htmlFor="inputPassword5"
                    className="title title-text">
                    Вопрос
                </Form.Label>
                <Form.Control
                    as="textarea"
                    id="inputQuestionText"
                    value={questionText}
                />
                {questionText}
            </div>
            {
                choices.map((choice) => {
                    return (
                        <div className="choice">
                            <Form.Control
                                as="text"
                                id={`choiceText ${choice.id}`}
                                value={`${choice.key}. ${choice.value}`}
                            />
                        </div>
                    )
                })
            }
            <Button variant="outline-dark" size="sm" className='buttonAddQuestion' onClick={
                () => {
                    addChoice({ value: 'вообще пофигу', key: 4, id: 3 });
                }
            }>
                <AddCircleOutlineIcon /> Добавить ответ
            </Button>
            <div className="choices">

            </div>

        </div>
    );
}

export default function Builder() {
    return (
        <div>
            <QuestionTemplate />
            {/* <Button variant="outline-dark" size="lg" className='buttonAddQuestion'>
            <AddCircleOutlineIcon /> Добавить вопрос
        </Button> */}
        </div>
    )
}
