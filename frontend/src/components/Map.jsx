import {VectorMap} from "@react-jvectormap/core";
import {worldMill} from "@react-jvectormap/world";
import React from "react";
import {countries, markers} from "./countries";


function WorldMap() {
    return (
        <div className="wrapper">

            <div className='app-box hide'>
                Информация о стране

            </div>
            <div className="map_div">
                <VectorMap
                    map={worldMill}
                    backgroundColor="SkyBlue"

                    series={{
                        regions: [
                            {
                                values: {
                                    IN: "#f56d04",
                                    KZ: "#ec0327",
                                    TJ: "#03ecd9",
                                    RU: "#ffe9e9",
                                    KG: "#b93418",
                                    PK: "#016362",
                                    CN: "#b40f0f",
                                    UZ: "#049849",
                                }
                            }
                        ],
                    }}


                    markers={[
                        {
                            latLng: [55.75222, 37.61556],
                            name: "Russia",

                        },
                        {
                            latLng: [39.9075, 116.39723],
                            name: "China",

                        },
                        {
                            latLng: [28.63576, 77.22445],
                            name: "India",

                        },
                        {
                            latLng: [51.1801, 71.446],
                            name: "Kazahstan",

                        },
                        {
                            latLng: [41.2646, 69.2163],
                            name: "Uzbekistan",
                        },
                        {
                            latLng: [38.5358, 68.7791],
                            name: "Tadjikistan",
                        },
                        {
                            latLng: [33.7215, 73.0433],
                            name: "Pakistan",
                        },
                        {
                            latLng: [42.87, 74.59],
                            name: "kyrgyzstan",
                        },
                    ]}


                    onRegionTipShow={function regionalTip(event, label, code) {
                        return label.html(`
                  <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white; padding-left: 10px">
                    <p>
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                   
                    </div>`);
                    }}
                    onMarkerTipShow={function markerTip(event, label, code) {
                        return label.html(`
                  <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px>
                    <p style="color: black !important;">
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    </div>`);
                    }}

                    onRegionClick={function (event, code) {
                        console.log(Object.keys(countries).includes(code));
                        if (Object.keys(countries).includes(code)) {
                            let a = document.querySelector(".app-box");
                            a.innerHTML = '';
                            a.classList.remove('hide');
                            console.log(code);
                            let b = countries[code].split('\n');
                            console.log(b);
                            for (let i = 0; i < b.length; i++) {
                                a.innerHTML += '<p>' + b[i] + '</p>';

                            }
                            if (code === "IN") {
                                a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                                a.innerHTML += '<li><a href="http://rus.sectsco.org/cultural/20230628/947807/V-Sekretariate-ShOS-otkrylsya-zal-Nyu-Deli.html">' + "В Секретариате ШОС открылся зал «Нью-Дели»" + '</a></li>';
                            }
                            if (code === "UZ") {
                                a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                                a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230710/950979/Vstrecha-Generalnogo-sekretarya-ShOS-s-Ministrom-inostrannykh-del-Respubliki-Uzbekistan-.html">' + "Встреча Генерального секретаря ШОС с Министром иностранных дел Республики Узбекистан" + '</a></li>';
                                a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230708/950374/O-nachale-nablyudatelnoy-raboty-Missii-ot-ShOS-v-Respublike-Uzbekistan.html">' + "О начале наблюдательной работы Миссии от ШОС в Республике Узбекистан" + '</a></li>';
                            }
                            if (code === "KZ") {
                                a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                                a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230614/946339/Generalnyy-sekretar-ShOS-vstretilsya-s-zamestitelem-Ministra-inostrannykh-del-Respubliki-Kazakhstan.html">' + "Генеральный секретарь ШОС встретился с заместителем Министра иностранных дел Республики Казахстан" + '</a></li>';
                                a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230318/934441/Missiya-nablyudateley-ot-ShOS-v-Kazakhstane.html">' + "Миссия наблюдателей от ШОС в Казахстане" + '</a></li>';
                            }
                            if (code === "PK") {
                                a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                                a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230507/942814/Vstrecha-Generalnogo-sekretarya-ShOS-s-Ministrom-inostrannykh-del-Islamskoy-Respubliki-Pakistan-B.html">' + "Встреча Генерального секретаря ШОС с Министром иностранных дел Исламской Республики Пакистан Б. Бхутто-Зардари" + '</a></li>';
                            }
                            if (code === "TJ") {
                                a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                                a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230427/940197/Mezhvedomstvennye-konsultatsii-po-voprosu-sozdaniya-Antinarkoticheskogo-tsentra-ShOS-v-gorode-Dushanbe.html">' + "Межведомственные консультации по вопросу создания Антинаркотического центра ШОС в городе Душанбе" + '</a></li>';
                            }
                            if (code === "CN") {
                                a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                                a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230607/945929/Generalnyy-sekretar-ShOS-Chzhan-Min-vstretilsya-s-Poslom-Alzhira-v-Kitae-Khassanom-Rabekhi.html">' + "Генеральный секретарь ШОС Чжан Мин встретился с Послом Алжира в Китае Хассаном Рабехи" + '</a></li>';
                                a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230523/944760/Vstrecha-Generalnogo-sekretarya-ShOS-s-Poslom-Islamskoy-Respubliki-Iran-v-Kitayskoy-Narodnoy.html">' + "Встреча Генерального секретаря ШОС с Послом Исламской Республики Иран в Китайской Народной Республике\n" + '</a></li>';
                            }
                            if (code === "RU") {
                                a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                                a.innerHTML += '<li><a href="http://rus.sectsco.org/media_SCO/20230427/940272/Generalnyy-sekretar-ShOS-otvetil-na-voprosy-agentstva-Sputnik-.html">' + "Генеральный секретарь ШОС ответил на вопросы агентства Sputnik" + '</a></li>';
                            }
                            if (code === "KG") {
                                a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                                a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230513/943828/Generalnyy-sekretar-ShOS-Chzhan-Min-posetil-Kyrgyzskuyu-Respubliku.html">' + "Генеральный секретарь ШОС Чжан Мин посетил Кыргызскую Республику" + '</a></li>';
                            }
                        }


                    }}
                    onMarkerClick={function (event, code) {
                        console.log(code);
                        if (code == 0) {
                            let a = document.querySelector(".app-box");
                            a.innerHTML = '';
                            a.classList.remove('hide');
                            let b = countries["RU"].split('\n');
                            for (let i = 0; i < b.length; i++) {
                                a.innerHTML += '<p>' + b[i] + '</p>';
                            }
                            a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                            a.innerHTML += '<li><a href="http://rus.sectsco.org/media_SCO/20230427/940272/Generalnyy-sekretar-ShOS-otvetil-na-voprosy-agentstva-Sputnik-.html">' + "Генеральный секретарь ШОС ответил на вопросы агентства Sputnik" + '</a></li>';
                        }
                        if (code == 1) {
                            let a = document.querySelector(".app-box");
                            a.innerHTML = '';
                            a.classList.remove('hide');
                            let b = countries["CN"].split('\n');
                            for (let i = 0; i < b.length; i++) {
                                a.innerHTML += '<p>' + b[i] + '</p>';
                            }
                            a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                            a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230607/945929/Generalnyy-sekretar-ShOS-Chzhan-Min-vstretilsya-s-Poslom-Alzhira-v-Kitae-Khassanom-Rabekhi.html">' + "Генеральный секретарь ШОС Чжан Мин встретился с Послом Алжира в Китае Хассаном Рабехи" + '</a></li>';
                            a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230523/944760/Vstrecha-Generalnogo-sekretarya-ShOS-s-Poslom-Islamskoy-Respubliki-Iran-v-Kitayskoy-Narodnoy.html">' + "Встреча Генерального секретаря ШОС с Послом Исламской Республики Иран в Китайской Народной Республике\n" + '</a></li>';
                        }
                        if (code == 2) {
                            let a = document.querySelector(".app-box");
                            a.innerHTML = '';
                            a.classList.remove('hide');
                            let b = countries["IN"].split('\n');
                            for (let i = 0; i < b.length; i++) {
                                a.innerHTML += '<p>' + b[i] + '</p>';
                            }
                            a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                            a.innerHTML += '<li><a href="http://rus.sectsco.org/cultural/20230628/947807/V-Sekretariate-ShOS-otkrylsya-zal-Nyu-Deli.html">' + "В Секретариате ШОС открылся зал «Нью-Дели»" + '</a></li>';
                        }
                        if (code == 3) {
                            let a = document.querySelector(".app-box");
                            a.innerHTML = '';
                            a.classList.remove('hide');
                            let b = countries["KZ"].split('\n');
                            for (let i = 0; i < b.length; i++) {
                                a.innerHTML += '<p>' + b[i] + '</p>';
                            }
                            a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                            a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230614/946339/Generalnyy-sekretar-ShOS-vstretilsya-s-zamestitelem-Ministra-inostrannykh-del-Respubliki-Kazakhstan.html">' + "Генеральный секретарь ШОС встретился с заместителем Министра иностранных дел Республики Казахстан" + '</a></li>';
                            a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230318/934441/Missiya-nablyudateley-ot-ShOS-v-Kazakhstane.html">' + "Миссия наблюдателей от ШОС в Казахстане" + '</a></li>';
                        }
                        if (code == 4) {
                            let a = document.querySelector(".app-box");
                            a.innerHTML = '';
                            a.classList.remove('hide');
                            let b = countries["UZ"].split('\n');
                            for (let i = 0; i < b.length; i++) {
                                a.innerHTML += '<p>' + b[i] + '</p>';
                            }
                            a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                            a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230710/950979/Vstrecha-Generalnogo-sekretarya-ShOS-s-Ministrom-inostrannykh-del-Respubliki-Uzbekistan-.html">' + "Встреча Генерального секретаря ШОС с Министром иностранных дел Республики Узбекистан" + '</a></li>';
                            a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230708/950374/O-nachale-nablyudatelnoy-raboty-Missii-ot-ShOS-v-Respublike-Uzbekistan.html">' + "О начале наблюдательной работы Миссии от ШОС в Республике Узбекистан" + '</a></li>';
                        }
                        if (code == 5) {
                            let a = document.querySelector(".app-box");
                            a.innerHTML = '';
                            a.classList.remove('hide');
                            let b = countries["TJ"].split('\n');
                            for (let i = 0; i < b.length; i++) {
                                a.innerHTML += '<p>' + b[i] + '</p>';
                            }
                            a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                            a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230427/940197/Mezhvedomstvennye-konsultatsii-po-voprosu-sozdaniya-Antinarkoticheskogo-tsentra-ShOS-v-gorode-Dushanbe.html">' + "Межведомственные консультации по вопросу создания Антинаркотического центра ШОС в городе Душанбе" + '</a></li>';
                        }
                        if (code == 6) {
                            let a = document.querySelector(".app-box");
                            a.innerHTML = '';
                            a.classList.remove('hide');
                            let b = countries["PK"].split('\n');
                            for (let i = 0; i < b.length; i++) {
                                a.innerHTML += '<p>' + b[i] + '</p>';
                            }
                            a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                            a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230507/942814/Vstrecha-Generalnogo-sekretarya-ShOS-s-Ministrom-inostrannykh-del-Islamskoy-Respubliki-Pakistan-B.html">' + "Встреча Генерального секретаря ШОС с Министром иностранных дел Исламской Республики Пакистан Б. Бхутто-Зардари" + '</a></li>';
                        }
                        if (code == 7) {
                            let a = document.querySelector(".app-box");
                            a.innerHTML = '';
                            a.classList.remove('hide');
                            let b = countries["KG"].split('\n');
                            for (let i = 0; i < b.length; i++) {
                                a.innerHTML += '<p>' + b[i] + '</p>';
                            }
                            a.innerHTML += "<h3>" + 'Новости' + "</h3>"
                                a.innerHTML += '<li><a href="http://rus.sectsco.org/political/20230513/943828/Generalnyy-sekretar-ShOS-Chzhan-Min-posetil-Kyrgyzskuyu-Respubliku.html">' + "Генеральный секретарь ШОС Чжан Мин посетил Кыргызскую Республику" + '</a></li>';
                        }
                    }}
                />
            </div>

        </div>

    );
}

export default WorldMap;