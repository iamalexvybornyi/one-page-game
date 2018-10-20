$(window).bind('hashchange', function() {
	var question;
	var questions = [
	// Category 1
	[
		'<h1 id="question" class="cover-heading">Эти животные, в отличие от других хищников, питаются не только мясом: они едят траву и ягоды.</h1>',
		'<h1 id="question" class="cover-heading">Самый быстрый летун среди насекомых.</h1>',
		'<h1 id="question" class="cover-heading">Это животное, не имея рук, может поднять с земли монетку, гвоздик и тяжелую бочку.</h1>',
		'<h1 id="question" class="cover-heading">Эта птица умеет стонать, охать, пищать, хрипеть, хохотать и визжать.<audio autoplay> <source src="catInBag.mp3" type="audio/mpeg"> </audio></h1>',
		'<h1 id="question" class="cover-heading">Этих млекопитающих (не собак) приручили индийские магараджи, персидские шахи, турецкие султаны, арабские шейхи, эфиопские императоры к охоте на других животных.</h1>',
		'<h1 id="question" class="cover-heading">Это насекомое позволило русскому мастеру посрамить английских.</h1>',
		'<h1 id="question" class="cover-heading">У этого крупного животного (до 2,5 метров ростом) детеныш рождается длиной всего три сантиметра.</h1>',
		'<h1 id="question" class="cover-heading">Какая птица является национальным символом США и изображен на гербе этой страны?</h1>',
		'<h1 id="question" class="cover-heading">Это животное достигло пределов совершенства в скрытности, научившись не попадаться на глаза человеку. Его инстинкт самосохранения развит сильнее, чем у других млекопитающих. Его называют «луговым волком». А как еще?</h1>',
		'<h1 id="question" class="cover-heading">Как называется гигантская птица из сказок «Тысячи и одной ночи», чьим прообразом мог бы стать живший когда-то на острове Мадагаскар эпиорнис?</h1>'
	],
	
	// Category 2
	[
		'<h1 id="question" class="cover-heading">Водами каких океанов омывается Россия?</h1>',
		'<h1 id="question" class="cover-heading">Назовите государство, спрятанное под знаком вопроса.<img src="img/c2q2.jpg" alt="c2q2"/></h1>',
		'<h1 id="question" class="cover-heading">Назовите самый высокий действующий вулкан России.</h1>',
		'<h1 id="question" class="cover-heading">Самый крупный левый приток Волги.</h1>',
		'<h1 id="question" class="cover-heading">На этом материке расположено несколько полюсов.</h1>',
		'<h1 id="question" class="cover-heading">Именно эта река дала название одному из океанов.</h1>',
		'<h1 id="question" class="cover-heading">Границы стольких государств сходятся на Северном полюсе?</h1>',
		'<h1 id="question" class="cover-heading">Границы стольких государств сходятся на Южном полюсе?</h1>',
		'<h1 id="question" class="cover-heading">Открыл ее голландец, первым решил использовать француз, а овладели ею англичане. Сейчас она, правда, уже практически независима.</h1>',
		'<h1 id="question" class="cover-heading">На месте именно этого города в 7 веке до н.э. было основано поселение, посвященное Геркулесу-отшельнику.</h1>'
	],
	
	// Category 3
	[
		'<h1 id="question" class="cover-heading">Кто такой Роман Михайлович?</h1>',
		'<h1 id="question" class="cover-heading">Назовите орган студенческого самоуправления, который избирается в общежитии?</h1>',
		'<h1 id="question" class="cover-heading">Каков максимальный размер взимаемых профсоюзных взносов?</h1>',
		'<h1 id="question" class="cover-heading">Как называется периодическое печатное издание нашего Профсоюза?</h1>',
		'<h1 id="question" class="cover-heading">Каков размер взимаемых профсоюзных взносов в нашем университете?</h1>',
		'<h1 id="question" class="cover-heading">Каким документом в ВУЗе осуществляется назначение стипендии?</h1>',
		'<h1 id="question" class="cover-heading">Годом чего объявлен 2018 год в Профсоюзе?<audio autoplay> <source src="catInBag.mp3" type="audio/mpeg"> </audio></h1>',
		'<h1 id="question" class="cover-heading">Назовите ФИО председателя СКС РФ.</h1>',
		'<h1 id="question" class="cover-heading">Перечислите 7 видов стипендий</h1>',
		'<h1 id="question" class="cover-heading">Назовите ФИО председателя Общероссийского Профсоюза образования РФ и трёх его заместителей.</h1>'
	
	],
	
	// Category 4
	[
		'<h1 id="question" class="cover-heading"><img src="img/c4q1.jpg" alt="c4q1"/></h1>',
		'<h1 id="question" class="cover-heading"><img src="img/c4q2.jpg" alt="c4q2" style="width:450px;height:750px;"/></h1>',
		'<h1 id="question" class="cover-heading"><img src="img/c4q3.jpg" alt="c4q3"/></h1>',
		'<h1 id="question" class="cover-heading"><img src="img/c4q4.jpg" alt="c4q4"/></h1>',
		'<h1 id="question" class="cover-heading"><img src="img/c4q5.jpg" alt="c4q5"/></h1>',
		'<h1 id="question" class="cover-heading"><img src="img/c4q6.jpg" alt="c4q6"/></h1>',
		'<h1 id="question" class="cover-heading"><img src="img/c4q7.jpg" alt="c4q7"/></h1>',
		'<h1 id="question" class="cover-heading"><img src="img/c4q8.jpg" alt="c4q8"/></h1>',
		'<h1 id="question" class="cover-heading"><img src="img/c4q9.jpg" alt="c4q9"/><audio autoplay> <source src="catInBag.mp3" type="audio/mpeg"> </audio></h1>',
		'<h1 id="question" class="cover-heading"><img src="img/c4q10.jpg" alt="c4q10"/></h1>'
	],
	
	// Category 5
	[
		'<h1 id="question" class="cover-heading">Первый Российский император.</h1>',
		'<h1 id="question" class="cover-heading">Раньше там жили индейцы, а сейчас это самая густонаселенная испаноязычная страна мира. Какая?</h1>',
		'<h1 id="question" class="cover-heading">На каком озере произошло Ледовое побоище?</h1>',
		'<h1 id="question" class="cover-heading">При Петре I в Санкт-Петербурге был построен завод по производству "зелья". Улица, на которой он стоял, сейчас называется Большая Зеленина. Заводы, подобные этому, назывались мельницами. Датский посол Юль по поводу русского зелья отмечал: "Вряд ли найдешь в Европе государство, где бы его изготавливали в таком количестве и где бы по качеству и силе это могло бы сравниться со здешним." Смертность на этих заводах была выше, чем на других. Что производили на этих заводах?</h1>',
		'<h1 id="question" class="cover-heading">Всем известно выражение "тютелька в тютельку", то есть очень и очень точно. А что же такое "тютелька"?</h1>',
		'<h1 id="question" class="cover-heading">Офицеры Российской империи, поднявшие восстание против царского самодержавия в 1825 г.</h1>',
		'<h1 id="question" class="cover-heading">За всю историю существования Военного ордена Победоносца Георгия, полных его кавалеров было четверо. Все они фельдмаршалы:  М.Б. Барклай-де-Толли, И.Ф. Паскевич- Эриванский, И.И.Дибич-Забалканский и …Кто еще?</h1>',
		'<h1 id="question" class="cover-heading">При раскопках древнеримского театра на острове Сардиния были найдены странные вазы из обожженной глины, каждая высотой около полуметра. Вначале археологи предполагали, что вазы эти служили украшением театра, но отсутствие на них художественной росписи, заставило многих усомниться в правильности этой догадки. Каково же истинное назначение этих огромных ваз?<audio autoplay> <source src="catInBag.mp3" type="audio/mpeg"> </audio></h1>',
		'<h1 id="question" class="cover-heading">27 января 1944 года во время спектакля в Большом театре действие вдруг внезапно прервалось, опустился занавес, зажегся в зале свет, а на авансцену вышел директор театра. После реакции в зале на его сообщение возможность продолжить спектакль появилась только через полчаса. О чем сообщил директор театра?</h1>',
		'<h1 id="question" class="cover-heading">Последний год Первой мировой войны положил начало еще одной общеевропейской трагедии, приведшей к гибели почти в пять раз большего количества людей, чем в годы самой войны. Что это было?</h1>'
	],
	
	// Category 6
	[
        '<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c6q1.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c6q2.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c6q3.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c6q4.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c6q5.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c6q6.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c6q7.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c6q8.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c6q9.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c6q10.mp3" type="audio/mpeg"></audio></h1>'
	],
	
	// Category 7
	[
		'<h1 id="question" class="cover-heading">Сколько игроков находится одновременно на площадке при игре в баскетбол?</h1>',
		'<h1 id="question" class="cover-heading">Дисциплина лёгкой атлетики, представляющая собой забег на дистанцию 42 километра 195 метров.</h1>',
		'<h1 id="question" class="cover-heading">Ямайский спринтер, обладающий негласным титулом самого быстрого человека в мире.</h1>',
		'<h1 id="question" class="cover-heading">На каком покрытии играется Уимблдонский турнир по теннису?</h1>',
		'<h1 id="question" class="cover-heading">Назовите город - столицу Олимпиады-2004.<audio autoplay> <source src="catInBag.mp3" type="audio/mpeg"> </audio></h1>',
		'<h1 id="question" class="cover-heading">Какой вид спорта прославил имя Сергея Бубки?</h1>',
		'<h1 id="question" class="cover-heading">Талисманом какой хоккейной команды НХЛ является осьминог?</h1>',
		'<h1 id="question" class="cover-heading">Как итальянцы называют особо рьяных футбольных болельщиков?</h1>',
		'<h1 id="question" class="cover-heading">Сборная какой страны стала первым чемпионом мира по футболу в истории, победив на турнире в 1930 г.?</h1>',
		'<h1 id="question" class="cover-heading">Собака какой группы пород была талисманом Олимпиады 1972 г. в Мюнхене?</h1>'
	],
	
	// Category 8
	[
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c8q1.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c8q2.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c8q3.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c8q4.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c8q5.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c8q6.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c8q7.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c8q8.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c8q9.mp3" type="audio/mpeg"></audio></h1>',
		'<h1 id="question" class="cover-heading">♫♫♫<audio autoplay> <source src="music/c8q10.mp3" type="audio/mpeg"></audio></h1>'
	],
	
	// Category 9
	[
		'<h1 id="question" class="cover-heading">Какая гадость, какая гадость эта ваша заливная рыба…</h1>',
		'<h1 id="question" class="cover-heading">Ты заходи, если что...</h1>',
		'<h1 id="question" class="cover-heading">А что подумал по этому поводу Кролик, никто так и не узнал, потому что Кролик был очень воспитанный.</h1>',
		'<h1 id="question" class="cover-heading">Скажи-ка, дядя, ведь недаром...</h1>',
		'<h1 id="question" class="cover-heading">Если человек идиот, то это надолго.</h1>',
		'<h1 id="question" class="cover-heading">Спасение утопающих — дело рук самих утопающих.</h1>',
		'<h1 id="question" class="cover-heading">Шесть месяцев я не мог спать. Когда у тебя бессонница — всё нереально; всё очень далеко от тебя, всё это — копия, снятая с копии, которая в свою очередь снята с копии.</h1>',
		'<h1 id="question" class="cover-heading">...Ежели бы все воевали только по своим убеждениям, войны бы не было...</h1>',
		'<h1 id="question" class="cover-heading">Дура с сердцем и без ума такая же несчастная дура, как и дура с умом и без сердца.</h1>',
		'<h1 id="question" class="cover-heading">Есть преступления хуже, чем сжигать книги. Например — не читать их.</h1>'
	]
	];
		
		if(window.location.href.indexOf("#home") === -1) {
			var currentURL = window.location.href;
			var questionsCategoryNumber = currentURL.match( /#C\dQ\d+/gi );
			var questionIndexes = questionsCategoryNumber[0].match( /\d+/gi );
			
			var categoryIndex = parseInt(questionIndexes[0])-1;
			var questionIndex = parseInt(questionIndexes[1])-1;
			question = questions[categoryIndex][questionIndex];
			
		    //var tableCells = document.getElementById("questionsTable").getElementsByTagName("td");
		    //tableCells[categoryIndex*10 + questionIndex].style.backgroundColor = "yellow";
			
		    //var table = document.getElementById("tableWrapper").innerHTML;
			//sessionStorage.setItem('questionsTableData', table);
			//$('#questionsTable').replaceWith(question);
			var tableQuestionIndex = categoryIndex*10 + questionIndex;
			questionsTableData = sessionStorage.getItem('questionsTableData');
			if (questionsTableData !== null && questionsTableData !== '') {
				questionsTableData += ";" + tableQuestionIndex;
			}else {
				questionsTableData = tableQuestionIndex;
			}
			
			sessionStorage.setItem('questionsTableData', questionsTableData);
			
			document.getElementById("tableWrapper").style.display = "none";
			$('#question').replaceWith(question);
			document.getElementById("question").style.display = "";
		}
	});