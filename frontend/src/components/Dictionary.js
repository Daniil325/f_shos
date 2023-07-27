import React, {Component} from "react";
import axios from "axios";

class Dictionary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: null,
            isLoaded: false,
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state);
        const baseURL = 'http://localhost:8000/word/';
        axios.get(baseURL + this.state.value)
            .then((response) => {
                const data = response.data;
                console.log(data);
                this.setState({
                    isLoaded: true,
                    items: data
                });
            })
        console.log(this.state.value);
        event.preventDefault();
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <div className="content">
                    <form onSubmit={this.handleSubmit} method="GET" className="ggg">
                        <input className="text-field__input" type="text" name="login" id="login"
                               placeholder="Введите слово"
                               value={this.state.value} onChange={this.handleChange}/>
                        <input type="submit" className="btn" value="Отправить"/>
                    </form>
                    <div className="">
                        <h2>О́БЛАКО, -а, мн. облака́, -о́в, ср. 1. Скопление взвешенных в атмосфере мелких капель воды
                            или
                            ледяных кристаллов. Слоистые облака. Перистые облака. (Малый академический словарь,
                            МАС)</h2>
                    </div>
                    <div className="word-image-and-associations">
                        <img
                            src="https://xn--80ajubim2a.xn--p1acf/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/%D1%81%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/%D0%BE%D0%B1%D0%BB%D0%B0%D0%BA%D0%BE.png?w=1600&h=900"
                            width={400} height={300} alt="транскрипция"
                            className="morph_image"
                        />
                        <div className="word-associations">
                            <div className="associations">
                                <h4>Ассоциации к слову</h4>
                                <ul className="word-list">
                                    <li>небо</li>
                                    <li>облачка</li>
                                    <li>облачко</li>
                                    <li>безоблачно</li>
                                    <li>туча</li>
                                </ul>

                            </div>
                            <div className="synonyms">
                                <h4>Синонимы к слову</h4>
                                <ul className="word-list">
                                    <li>облачко</li>
                                    <li>туча</li>
                                    <li>тучка</li>
                                    <li>туман</li>
                                    <li>пелена</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="examples">
                        <h4>Примеры использования слова</h4>
                        <ul className="word-list">
                            <li className="word-item">
                                – Соль, – сказал он самому себе и зашагал вдоль колеи, поднимая белые облака пыли.
                            </li>
                            <li className="word-item">
                                Больше всего, однако, меня занимало ограждённое пространство посередине и похожее
                                на палатку сооружение в дальнем конце, над которым поднимается белое облако дыма
                            </li>
                            <li className="word-item">
                                Я уже начал надеяться на то, что всё закончится хорошо, но как раз
                                в это время раздался громкий хлопок, и самолёт окутало густое облако дыма.
                            </li>
                        </ul>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="content">
                    <form onSubmit={this.handleSubmit} method="GET" className="ggg">
                        <input className="text-field__input" type="text" name="login" id="login"
                               placeholder="Введите слово"
                               value={this.state.value} onChange={this.handleChange}/>
                        <input type="submit" className="btn" value="Отправить"/>
                    </form>
                    <div className="">
                        <h2>{this.state.items.definition}</h2>
                    </div>
                    <div className="word-image-and-associations">
                        <img
                            src={this.state.items.image_link}
                            width={400} height={300} alt="транскрипция"
                            className="morph_image"
                        />
                        <div className="word-associations">
                            <div className="associations">
                                <h4>Ассоциации к слову</h4>
                                <ul className="word-list">
                                    {this.state.items.associations.map((el) =>
                                        <li>{el}</li>
                                    )}
                                </ul>
                            </div>

                            <div className="synonyms">
                                <h4>Синонимы к слову</h4>
                                <ul className="word-list">
                                    {this.state.items.synonyms.map((number) =>
                                        <li>{number}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="examples">
                        <h4>Примеры использования слова</h4>
                        <ul className="word-list">
                            {this.state.items.examples.map((number) =>
                                <li>{number}</li>
                            )}
                        </ul>
                    </div>

                </div>
            )
        }
    }
}

export default Dictionary;
