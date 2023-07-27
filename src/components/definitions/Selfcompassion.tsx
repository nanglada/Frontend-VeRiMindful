import { useState } from "react";
import Navbar from "../page/Navbar";
import SelfcompassionQuiz from "./SelfcompasionQuiz";
import { Link } from "react-router-dom";
import SelfcompassionPoster from '../../assets/selfcompassion.png';

export default function Selfcompassion() {
    let [total, setTotal] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    let [answer, setAnswer] = useState("");
    let score = 0;
    let [final, setFinal] = useState(0);

    const updateTotal = (e: any, index: number) => {
        const updatedTotal = [...total];
        updatedTotal[index] = e.target.value;
        setTotal(updatedTotal);
    }
    
    function addScore(e: any){
        e.preventDefault()
        total.map((num: number, index: number) => 
            {   
                console.log(num)
                score += Number(num);
                // setScore(Number(num));
                
            console.log(index + "." + " " + score)}
        )
        
        setFinal(score / 12)
        if (final <= 2.75){
            setAnswer("Puntuación baja")
        }
        else if (final <= 3.25){
            setAnswer("Puntuación media")
        }
        else {
            setAnswer("Puntuación alta")
        }
    }

    return (
        <>
        <Navbar/>
        <div className="px-12 lg:px-40 py-8 text-justify">
            <h1 className="font-logo text-3xl mb-4 text-blue1">¿Qué es la Autocompasión?</h1>
            <p className="mb-2">Tener compasión por uno mismo o Autocompasión, no es realmente diferente de tener compasión por 
                los demás. Piensa en lo que se siente en una experiencia de compasión:</p>
            <ul className="ml-8">
                <li className="mb-2">• En primer lugar, para tener compasión por los demás, debes notar que están sufriendo. 
                    Si no haces caso, por ejemplo, a esa persona sin hogar que está en la calle, no puedes 
                    sentir compasión por lo difícil que debe ser su experiencia vital.</li> 
                <li className="mb-2">• En segundo lugar, la compasión implica sentirse conmovido por el sufrimiento de los demás 
                    para que tu corazón responda a su dolor (la palabra compasión significa literalmente 
                    "sufrir con"). Cuando esto ocurre, sientes la calidez, el cuidado, y el deseo de ayudar 
                    a la persona que sufre de alguna manera. Tener compasión significa también que ofreces 
                    comprensión y bondad hacia los demás cuando fallan o cometen errores, en lugar de 
                    juzgarlos con severidad.</li>
                <li className="mb-2">• Por último, cuando sientes compasión por otro (en lugar de la mera lástima), significa 
                    que te das cuenta de que el sufrimiento, el fracaso y la imperfección son parte de la 
                    experiencia humana compartida.</li>
            </ul>
            <p className="mb-2">Tal vez lo más importante al tener compasión por ti mismo sea que honras y aceptas tu humanidad. 
                Las cosas no siempre salen como tú quieres. Te encontrarás con frustraciones, habrá pérdidas, 
                cometerás errores, y te vas a topar con tus limitaciones y la caída de tus ideales. Esta es la 
                condición humana, una realidad compartida por todos nosotros. Cuanto más abres tu corazón a esta 
                realidad en lugar de estar constantemente luchando contra ella, más capaz serás de sentir compasión 
                por ti mismo y todos tus congéneres en la experiencia de la vida.</p>
            <p className="mb-2">Cuando aliviamos nuestro propio dolor, activamos el sistema mamífero de cuidado. Y una forma 
                importante en que funciona este sistema es provocando la liberación de oxitocina. Las 
                investigaciones indican que el aumento de los niveles de oxitocina incrementa en gran medida 
                los sentimientos de confianza, calma, seguridad, generosidad y conexión, y facilita la 
                capacidad de sentir calidez y compasión por nosotros mismos. La oxitocina se libera en 
                diversas situaciones sociales, como cuando una madre amamanta a su hijo, cuando los padres 
                interactúan con sus hijos pequeños o cuando alguien da o recibe una caricia suave y tierna. 
                Dado que los pensamientos y las emociones tienen el mismo efecto en nuestro cuerpo tanto si 
                van dirigidos a nosotros mismos como a los demás, la investigación sugiere que la autocompasión 
                puede ser un potente desencadenante de la liberación de oxitocina.</p>
            <p className="mb-2">La autocrítica parece tener un efecto muy diferente en nuestro cuerpo. La amígdala es la parte 
                más antigua del cerebro y está diseñada para detectar rápidamente amenazas en el entorno. 
                Cuando experimentamos una situación amenazante, se desencadena la respuesta de lucha o huida: 
                La amígdala envía señales que aumentan la presión sanguínea, la adrenalina y la hormona cortisol, 
                movilizando la fuerza y la energía necesarias para afrontar o evitar una amenaza. Aunque este 
                sistema fue diseñado por la evolución para hacer frente a ataques físicos, se activa con la misma 
                facilidad ante ataques emocionales. Por nosotros mismos o por los demás. Investigaciones recientes 
                indican que generar sentimientos de autocompasión disminuye nuestros niveles de cortisol.</p>
            <p className="mb-2">Cuando aliviamos nuestros sentimientos dolorosos con el bálsamo curativo de la autocompasión, no 
                sólo estamos cambiando nuestra experiencia mental y emocional, sino también la química de nuestro 
                cuerpo.  Por lo tanto, un aspecto eficaz de la práctica de la autocompasión es aprovechar el sistema 
                autocurativo de nuestro cuerpo a través de las sensaciones físicas.</p>
            <p className="mb-2">Esto significa que una forma fácil de calmarse y reconfortarse cuando uno se siente mal es a través 
                del tacto. Al principio parece una tontería, pero el cuerpo no lo sabe. Simplemente responde al gesto 
                físico de calidez y cariño, igual que un bebé responde al abrazo de su madre.  Recuerda que el 
                contacto físico libera oxitocina, reduce el cortisol y calma el estrés cardiovascular.</p>
        </div>
        <div className="bg-orange1 text-black">
            <div className="px-12 lg:px-40 py-8 text-justify">
                <h1 className="font-logo text-3xl mb-4">Investigación sobre la práctica de autocompasión</h1>
                <p className="mb-2">Gran parte de la investigación sobre la autocompasión se ha llevado a cabo utilizando la Escala 
                    de Autocompasión (SCS), que se diseñó para evaluar los niveles de rasgo de la autocompasión.</p>
                <p className="mb-2">Esta escala se desarrolló para evaluar pensamientos, emociones y ciertos comportamientos asociados 
                    con diferentes componentes de la autocompasión.</p>
                <p className="mb-2">La escala incluye ítems como la medición de la frecuencia con la que las personas responden a 
                    sentimientos de inadecuación o sufrimiento. y también mide la atención plena, la autocompasión y 
                    el autojuicio.</p>
                <p className="mb-2">Por ejemplo, alguien que se siente inadecuado puede juzgarse duramente a sí mismo cuando siente dolor 
                    emocional, en lugar de intentar ser cariñoso y amable.</p>
                <p className="mb-2">El autojuicio puede entrar en juego cuando alguien juzga duramente sus propias insuficiencias y 
                    defectos. La atención plena también entra en juego, ya que ayuda a adoptar un punto de vista más 
                    equilibrado si ocurre algo doloroso.</p>
                <p className="mb-2">Las respuestas de la escala se dan en una escala de 5 puntos, desde casi nunca hasta casi siempre.</p>
                <p>La forma abreviada de la escala de autocompasión (SCS-SF) contiene 12 ítems en lugar de 26 y 
                    puede utilizarse con fines de investigación. La escala corta tiene una correlación casi perfecta 
                    con la escala más larga cuando se examinan las puntuaciones totales.</p>
                <p className="mb-2">La escala mide ítems como:</p>
                <ul className="ml-8">
                    <li className="mb-2">• Amabilidad con uno mismo</li>
                    <li className="mb-2">• Autojuicio</li>
                    <li className="mb-2">• Elementos de humanidad común</li>
                    <li className="mb-2">• Elementos de aislamiento</li>
                    <li className="mb-2">• Elementos de atención plena</li>
                    <li className="mb-2">• Ítems de sobreidentificación</li>
                </ul>
            </div>
        </div>
        <div className="px-12 lg:px-40 py-8 text-justify">
            <h1 className="font-logo text-3xl mb-4 text-blue1">Test Breve de Autocompasión</h1> 
            <p className="mb-2">(Esta es una versión abreviada de la escala de autocompasión empleada en casi todas las 
                investigaciones sobre el tema)</p>
            <p className="mb-2"><i>Por favor, lee cada afirmación con atención antes de responder. En la escala indica con que 
                frecuencia te comportas de esa manera. Responde en función de lo que refleje realmente tu 
                experiencia, no por cómo pienses que tu experiencia debería ser.</i></p>
            <p className="mb-2"><strong>Para el primer grupo de afirmaciones, utiliza una escala del 1 (casi nunca) al 5 (casi siempre), 
                con las puntuaciones intermedias que consideres oportunas.</strong></p>
            <form onSubmit={addScore}>
                <SelfcompassionQuiz index={0} updateTotal={updateTotal} text={"Intento ser comprensiva y paciente con los rasgos de mi personalidad que no me gustan."}/>
                <SelfcompassionQuiz index={1} updateTotal={updateTotal} text={"Cuando ocurre algo doloroso, intento adoptar una perspectiva equilibrada de la situación."}/>
                <SelfcompassionQuiz index={2} updateTotal={updateTotal} text={"Intento ver mis defectos como parte de la condición humana."}/>
                <SelfcompassionQuiz index={3} updateTotal={updateTotal} text={"Cuando paso por una etapa muy mala, me doy la empatía y el cariño que necesito."}/>
                <SelfcompassionQuiz index={4} updateTotal={updateTotal} text={"Cuando algo me molesta, intento mantener mis emociones equilibradas."}/>
                <SelfcompassionQuiz index={5} updateTotal={updateTotal} text={"Cuando me siento incompetente, intento recordarme que casi todas las personas albergan sentimientos de incompetencia en algún momento."}/>
                <p className="my-6"><strong>Para el siguiente grupo de afirmaciones, utiliza una escala del 1 (casi siempre) al 5 (casi nunca), con las 
                    puntuaciones intermedias que consideres oportunas. Ten en cuenta que el sistema de puntuación está invertido: 
                    las puntuaciones más altas indican menos frecuencia.</strong></p> 
                <SelfcompassionQuiz index={6} updateTotal={updateTotal} text={"Cuando fracaso en algo importante para mí, los sentimientos de incompetencia me corroen."}/>
                <SelfcompassionQuiz index={7} updateTotal={updateTotal} text={"Cuando estoy de bajón, casi siempre pienso que los demás son más felices que yo."}/>
                <SelfcompassionQuiz index={8} updateTotal={updateTotal} text={"Cuando fracaso en algo importante para mí, tiendo a sentirme sola en mi fracaso."}/>
                <SelfcompassionQuiz index={9} updateTotal={updateTotal} text={"Cuando estoy de bajón, tiendo a obsesionarme y fijarme en todo lo negativo."}/>
                <SelfcompassionQuiz index={10} updateTotal={updateTotal} text={"Siento rechazo hacia mis defectos y mis errores, y los critico."}/>
                <SelfcompassionQuiz index={11} updateTotal={updateTotal} text={"Soy intolerante e impaciente con los aspectos de mi personalidad que no me gustan."}/>
                <div className="grid place-items-center mt-6">
                    <button type="submit" 
                        className='hover:bg-white hover:text-black border-black bg-black text-white py-2 px-4 border-2'>
                        CALCULAR RESULTADOS
                    </button>
                </div>
            </form>
            {
                (answer !== "") ? (
                    <>
                    <p>Obtuviste {final.toFixed(2)}. {answer}</p>
                    </>
                ) : null
            }
        </div> 
        <div className="bg-orange1 text-black">
            <div className="px-12 lg:px-40 py-8 text-justify">
                <h1 className="font-logo text-3xl mb-4">Los beneficios científicos de la autocompasión</h1>
                <p className="mb-2">La práctica de la autocompasión puede tener un efecto clave en la reducción de la evitación experiencial y el aumento de la flexibilidad psicológica, lo que a su vez puede influir en la ansiedad, la depresión y el bienestar general al promover la reducción de la evitación de experiencias difíciles.</p>
                <p className="mb-2">Aunque podríamos equivocadamente asumir que las personas compasivas consigo mismas poseen naturalmente una personalidad más alegre o saben cómo evitar los sentimientos difíciles, la realidad es que la autocompasión sigue siendo beneficiosa para el bienestar mental incluso cuando se toma en cuenta la autocrítica y el bajo estado de ánimo. Esto se debe a que quienes la practican desarrollan la habilidad de reconocer cuando enfrentan dificultades.</p>
                <p className="mb-2">La autoconciencia que se cultiva mediante la autocompasión permite que las personas se traten con amabilidad y enfrenten de manera más efectiva cualquier sentimiento de ansiedad que surja debido a situaciones complicadas.</p>
                <p className="mb-2">La autocompasión puede empoderar a las personas, haciéndolas sentirse fuertes, competentes y con la convicción de que pueden alcanzar el éxito.</p> 
                <p className="mb-2">Además, desarrollar la autocompasión fortalece la fuerza interior y la resiliencia. Al practicar la atención plena, uno puede reconocer y observar sentimientos de vergüenza o arrepentimiento sin quedar atrapado en ellos. Aceptar que todos cometemos errores puede ayudar a desarrollar fortaleza y resiliencia ante la adversidad.</p>
                <p className="mb-2">Por último, la autocompasión es una valiosa herramienta de aprendizaje. Cuando enfrentamos un proyecto laboral que no cumple nuestras expectativas, la autocrítica puede minar nuestro desarrollo profesional. Sin embargo, si nos tratamos con autocompasión, adoptamos una actitud más comprensiva, similar a la que tendríamos con un amigo en una situación similar, evitando así caer en la desesperanza y el desánimo. Los estudios demuestran que las personas con autocompasión no sólo tienen más confianza en sí mismas, sino que son menos propensas a temer el fracaso y más propensas a intentarlo de nuevo cuando fracasan, y a persistir en sus esfuerzos por seguir aprendiendo.</p>
                <p className="mb-2">En conclusión, los beneficios de la Autocompasión son significativos y nos ayuda a aprender y crecer frente a los desafíos que encontramos en la vida.</p>
            </div>
        </div>
        <div className="px-12 lg:px-40 py-8 text-justify">
            <h1 className="font-logo text-3xl mb-4 text-blue1">¿Qué te viene a la mente cuando piensas en la frase "cultivar una voz interior autocompasiva"?</h1>
            <p className="mb-2">En el mundo moderno de hoy, donde el perfeccionismo suele ser la norma, ser amable con uno mismo 
                puede parecer antinatural y desencadenar creencias negativas. Sin embargo, la investigación 
                científica ofrece una perspectiva diferente sobre estas ideas erróneas:</p>
            <ol className="ml-8">
                <li className="mb-2 font-bold">1. La Autocompasión es una forma de Lástima hacia uno mismo</li>
                <p className="mb-2">No es lástima. Cuando las personas sienten lástima de sí mismas, se ven inmersas en sus propios 
                    problemas y se olvidan de que los demás tienen problemas similares. No hacen caso de sus 
                    interconexiones con otras personas, y creen que son los únicos en el mundo que están sufriendo.</p>
                <li className="mb-2 font-bold">2. La autocompasión significa debilidad</li>
                <p className="mb-2">En vez de ser una debilidad, los investigadores están descubriendo que la autocompasión es una 
                    de las más poderosas fuentes de afrontamiento y resiliencia, que tenemos disponible para nosotros. 
                    Algunos estudios sugieren que no es solo importante cómo te enfrentas a la vida, sino cómo te 
                    relacionas contigo mismo cuando las cosas se ponen feas —como un aliado interno o un enemigo— lo 
                    que determina tu capacidad para afrontar dificultades exitosamente.</p>
                <li className="mb-2 font-bold">3. La autocompasión me hará autoindulgente</li>
                <p className="mb-2">No es autoindulgencia. La autocompasión es también muy diferente de la autoindulgencia. Muchas 
                    personas dicen que se resisten a ser autocompasivas, porque tienen miedo de dejarse llevar por 
                    cualquier impulso. Ser compasivo con uno mismo implica que quieres ser feliz y tener salud, 
                    también a largo plazo.</p>
                <li className="mb-2 font-bold">4. La autocompasión es lo mismo que la autoestima</li>
                <p className="mb-2">En contraste con la autoestima, la autocompasión no se basa en la autoevaluación. La gente siente 
                    compasión por sí misma, porque todos los seres humanos merecen compasión y comprensión, no porque 
                    posean un conjunto particular de características (guapos, inteligentes, etc.). Esto significa que 
                    con la autocompasión, no tenemos que sentirnos superiores a los demás para estar bien con nosotros 
                    mismos.</p>
                <li className="mb-2 font-bold">5. La autocompasión es egoísta</li>
                <p className="mb-2">Aunque la autocompasión a veces se confunde con el egoísmo, los estudios de Marshall y sus colegas 
                    (2020) demuestran que los niveles más altos de autocompasión están relacionados con comportamientos 
                    y actitudes más generosos. Al tratarnos a nosotros mismos con amabilidad, alcanzamos el equilibrio 
                    interior, lo que nos permite atender mejor las necesidades de los demás.</p>
                <li className="mb-2 font-bold">6. Mina la motivación</li>
                <p className="mb-2">A menudo se asume erróneamente que una voz interior autocompasiva fomenta la pasividad. Sin embargo, 
                    como indica la investigación, la autocompasión está vinculada a altos niveles de motivación 
                    orientada al dominio, lo que se traduce en una menor procrastinación y una mayor inversión de 
                    tiempo en la superación personal (Breines y Chen, 2012).</p>
            </ol>

        </div>
        <div className="bg-orange1 text-black">
            <div className="px-12 lg:px-40 py-8 text-justify">
            <h1 className="font-logo text-3xl mb-4">Los Componentes de la Autocompasión</h1>
            <h3 className="font-bold underline text-xl mb-2">Autocompasión frente al autojuicio</h3>
            <p className="mb-2">La mayoría de nosotros tratamos de ser amables y comprensivos con nuestros amigos y 
                seres queridos cuando se sienten mal consigo mismos o. Sin embargo, a menudo somos 
                mucho más duros con nosotros mismos y decimos cosas poco amables y críticas que 
                nunca diríamos a un amigo. Con la autocompasión, sin embargo, adoptamos una actitud 
                benevolente y de apoyo en lugar de condenarnos fríamente, cuando fracasamos o 
                experimentamos dificultades en la vida. Reconocemos nuestros defectos y nos cuidamos 
                a pesar de todo. Este tipo de autoaceptación disminuye los sentimientos de indignidad.</p>
            <p className="mb-2">La amabilidad con uno mismo implica mostrar activamente preocupación por 
                nuestro malestar. Intentamos aliviar nuestro malestar si podemos, no porque seamos inadecuados 
                tal y como somos, sino porque nos importa. La amabilidad con uno mismo implica estar emocionalmente 
                disponible cuando la vida se vuelve difícil.</p>
            <h3 className="font-bold underline text-xl mb-2">Humanidad común frente al aislamiento</h3>
            <p className="mb-2">El sentido de humanidad común inherente a la autocompasión nos ayuda a sentirnos 
                conectados con los demás, en lugar de separados de ellos. Cuando fracasamos o cometemos errores, 
                tendemos a sentir irracionalmente que todos los demás están bien y que nosotros somos los únicos 
                que hemos metido la pata o que nos ocurran ciertas cosas. Reaccionamos como si algo hubiera ido 
                mal y olvidamos que parte de ser humano significa enfrentarse a retos y ser vulnerable. Este 
                sentimiento de anormalidad crea una aterradora sensación de desconexión y soledad que agrava 
                nuestro sufrimiento.</p>
            <p className="mb-2">La autocompasión, reconocemos que los retos de la vida forman parte del ser humano, 
                una experiencia que todos compartimos. La compasión es, por definición, relacional. Implica una 
                reciprocidad básica en la experiencia del sufrimiento y surge del reconocimiento de que la experiencia 
                humana es imperfecta.</p>
            <h3 className="font-bold underline text-xl mb-2">Mindfulness o Atención plena frente a la identificación excesiva</h3>
            <p className="mb-2">Para tener compasión de nosotros mismos, debemos estar dispuestos a volver la mirada 
                hacia nuestro propio dolor, a reconocerlo con atención plena, sin evitarlo ni exagerar el malestar de 
                nuestra experiencia. No podemos mostrarnos compasivos si no reconocemos que nos duele algo.</p>
            <p className="mb-2">Por otro lado, podemos identificarnos demasiado con nuestros pensamientos o 
                sentimientos negativos y dejarnos arrastrar por nuestras reacciones adversas. La sobreidentificación 
                tiende a cosificar nuestra experiencia momento a momento, de modo que percibimos los sucesos 
                transitorios como definitivos y permanentes.</p>
            <p className="mb-2">Con la atención plena, sin embargo, reconocemos que nuestros pensamientos y 
                sentimientos negativos son sólo eso -pensamientos y sentimientos-, lo que nos ayuda a estar 
                menos absorbidos por ellos e identificados con ellos. Tenemos la perspectiva necesaria para 
                sentir compasión por nuestras dificultades. Por esta razón, el mindfulness es el pilar sobre 
                el que descansa la autocompasión.</p>
            </div>

        </div>
        <div className="px-12 lg:px-40 py-8 text-justify">
            <h1 className="font-logo text-3xl mb-4 text-blue1">Programa Autocompasión Consciente -  MSC (Mindful Self-Compassion)</h1>
            <p className="mb-2">El curso Mindful Self-Compassion (MSC) es un programa de entrenamiento de apoyo empírico, 
                de ocho semanas más una sesión de retiro, diseñado para cultivar la habilidad de la 
                autocompasión o amor incondicional hacia uno mismo. Basado en la investigación innovadora 
                de Kristin Neff y la experiencia clínica de Christopher Germer, el MSC enseña principios 
                básicos y prácticas que permiten a los participantes responder a momentos difíciles en sus 
                vidas con amabilidad, atención y comprensión.</p>
            <p className="mb-2">La autocompasión puede ser aprendida por cualquier persona, incluso aquellos 
                que no recibieron suficiente afecto en la infancia o que se sienten incómodos cuando son 
                bondadosos consigo mismos. Es una actitud valiente que nos protege de ser dañados, incluyendo 
                el daño que involuntariamente nos infligimos sobre nosotros mismos a través de la autocrítica, 
                el aislamiento o el ensimismamiento obsesivo. La compasión hacia uno mismo proporciona fuerza 
                emocional y resiliencia, permitiéndonos reconocer nuestros defectos, motivándonos a nosotros 
                mismos con amabilidad, perdonándonos a nosotros mismos cuando sea necesario, ayudándonos a 
                relacionarnos con los demás desde el corazón y a ser más auténticos con nosotros mismos.</p>
            <p className="mb-2">La investigación, en rápida expansión, demuestra que el entrenamiento en este 
                programa aumenta la autocompasión o amor incondicional hacia uno mismo, la compasión hacia otros, 
                el bienestar emocional, disminuye la ansiedad, depresión y estrés, y ayuda al mantenimiento de 
                hábitos saludables como dieta y ejercicio y a tener relaciones personales satisfactorias. Y es 
                más fácil de lo que piensas.</p>
            <h3 className="font-bold underline text-xl mb-2">¿Qué puedes esperar?</h3>
            <p className="mb-2">Las actividades del programa incluyen meditaciones específicas, charlas cortas, 
                ejercicios experienciales, compartir en grupo lo que se experimenta en los ejercicios y prácticas 
                para casa. El MSC es un taller en lugar de un retiro. El objetivo es que los participantes 
                experimenten directamente la experiencia de la compasión hacia uno mismo y aprendan las prácticas 
                que la evocan en la vida diaria.</p>
            <p className="mb-2">MSC es principalmente un programa de entrenamiento de compasión más que de 
                mindfulness, aunque la atención plena es el fundamento de la autocompasión. MSC tampoco es 
                psicoterapia en la medida en que el énfasis de MSC está en la construcción de recursos 
                emocionales no en abordar viejas heridas. El cambio positivo ocurre naturalmente a medida 
                que desarrollamos la capacidad de estar con nosotros mismos de una manera más amable y compasiva.</p>
            <p className="mb-2">El MSC incluye 8 sesiones (una semanal), además de una sesión de retiro. 
                Antes de registrarse los participantes deberían planificar el asistir a todas las sesiones 
                y practicar mindfulness y autocompasión al menos 30 minutos al día durante el programa.</p>
            <p className="mb-2"><strong>Cuando el alumno finalice el curso se pretende que sea capaz de:</strong></p>
            <ul className="ml-8">
                <li className="mb-2">• Practicar autocompasión en la vida diaria</li>
                <li className="mb-2">• Comprender los beneficios con apoyo empírico de la autocompasión</li>
                <li className="mb-2">• Motivarse a sí mismo con bondad, en lugar de criticarse</li>
                <li className="mb-2">• Manejar las emociones difíciles con facilidad</li>
                <li className="mb-2">• Transformar relaciones difíciles, tanto antiguas como nuevas</li>
                <li className="mb-2">• Manejar la fatiga del cuidador</li>
                <li className="mb-2">• Saborear la vida y cultivar la felicidad</li>
            </ul>

        </div>
        <div className="bg-orange1 text-black">
            <div className="px-12 lg:px-40 py-8 text-justify">
                <h1 className="font-logo text-3xl mb-4">Algunos artículos clave sobre la autocompasión, escritos por Kristin Neff</h1>
                <ol className="ml-8">
                    <li className="mb-2"><Link className="underline font-bold hover:text-blue1" to="https://self-compassion.org/women-fierce-self-compassion/">1. Por qué las 
                        mujeres necesitan una autocompasión feroz</Link></li>
                    <p className="mb-2">Neff habla en este artículo de lo importante que es para las mujeres tener una 
                        autocompasión feroz.</p>
                    <li className="mb-2"><Link className="underline font-bold hover:text-blue1" to="https://self-compassion.org/embracing-our-common-humanity-with-self-compassion/">2. 
                        Abrazar nuestra humanidad común con autocompasión</Link></li> 
                    <p className="mb-2">En este artículo, Neff habla de la idea de abrazar nuestra humanidad común con autocompasión. 
                        Es importante recordar que los sentimientos de inadecuación y sufrimiento son universales, 
                        y algo que es una experiencia compartida. El reconocimiento de esta experiencia compartida 
                        nos ayuda a ser más comprensivos y a juzgar menos nuestras insuficiencias.</p>
                    <li className="mb-2"><Link className="underline font-bold hover:text-blue1" to="https://self-compassion.org/self-appreciation-the-flip-side-of-self-compassion/">3. 
                        Autoapreciación: la otra cara de la autocompasión</Link></li> 
                    <p className="mb-2">A muchas personas les cuesta centrarse en sus rasgos positivos. La pregunta es ¿por qué? 
                        Los elogios y los cumplidos deberían ser algo que nos alegrara recibir, pero a muchos nos resulta incómodo 
                        aceptarlos. En este artículo, Neff habla de lo importante que es llegar a un punto en el que podamos 
                        celebrar nuestras cualidades admirables de forma saludable.</p>
                    <li className="mb-2"><Link className="underline font-bold hover:text-blue1" to="https://self-compassion.org/the-physiology-of-self-compassion/">4. La 
                        fisiología de la autocompasión</Link></li>
                    <p className="mb-2">La fisiología de la autocompasión se centra en investigaciones que demuestran que las personas que son 
                        autocompasivas tienen menos probabilidades de estar deprimidas, ansiosas y estresadas. Como resultado, 
                        tienen más probabilidades de ser felices, resilientes y optimistas sobre el futuro. En definitiva, 
                        quienes son autocompasivos experimentan una mejor salud mental.</p>
                    <li className="mb-2"><Link className="underline font-bold hover:text-blue1" to="https://www.mindful.org/the-transformative-effects-of-mindful-self-compassion/">5. Los efectos 
                        transformadores de la autocompasión consciente</Link></li>
                    <p className="mb-2">El artículo "The Transformative Effects of Mindful Self-Compassion" es otro gran artículo, escrito por la 
                        Dra. Kristen Neff y el Dr. Christopher Germer.</p>
                </ol>
                <p className="mb-2">Los autores hablan de cómo la autocompasión, el reconocimiento de nuestra 
                propia humanidad y la atención plena pueden darnos la fuerza para prosperar. La Dra. Neff se 
                refiere a su propia experiencia personal con la autocompasión cuando habla del diagnóstico de 
                autismo de su hijo y de cómo la autocompasión le ayudó a superarlo. Ser conscientes de nuestras 
                propias luchas puede ayudarnos a responder a nosotros mismos con amabilidad y apoyo.</p>
            </div>
        </div>
        <div className="px-12 lg:px-40 py-8 text-justify">
            <div className="flex justify-center items-center"> 
                <img className="w-full lg:w-2/3" src={SelfcompassionPoster}></img>
            </div>
        </div>
        </>
    );
}