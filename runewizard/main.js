/**
 * Runewizard
 *
 * @author   Denis Fabrice
 * @version  1.1 2008/07/17
 * @license  Creative Commons Attribution-Noncommercial-Share Alike
 *           http://creativecommons.org/licenses/by-nc-sa/2.0/be/
 *           See additional conditions at footer of the html page.
 *
 * Tested with Firefox 3, Opera 9.5, Safari 3.1.2 (Windows), IE6, IE7 (beta).
 *
 * This script was written for readability, and to make it easy for others
 * to modify (for example to adapt to Runewords featured in Diablo II mods).
 *
 * The layer code is kept really simple, it doesn't account for clipping at
 * the bottom of the screen, that's why I added some padding after the main
 * table so the description of the last runewords remains visible in its entirety.
 *
 * If you change MAX_RUNES, you need to adapt the number of table heads, as
 * well as table cells in the "template" row in the html file.
 */

var Runewords = [
	/* 1.09 */
  {title:"Ancient's Pledge<br>고대인의 서약</br>",runes:['Ral','Ort','Tal'],ttype:"방패"},
  {title:"Black<br>블랙</br>",runes:['Thul','Io','Nef'],ttype:"클럽/해머/메이스"},
  {title:"Fury<br>원한</br>",runes:['Jah','Gul','Eth'],ttype:"근접 무기"},
  {title:"Holy Thunder<br>홀리 썬더</br>",runes:['Eth','Ral','Ort','Tal'],ttype:"셉터"},
  {title:"Honor<br>명예</br>",runes:['Amn','El','Ith','Tir','Sol'],ttype:"근접 무기"},
  {title:"King's Grace<br>왕의 자비</br>",runes:['Amn','Ral','Thul'],ttype:"검/셉터"},
  {title:"Leaf<br>꽃잎</br>",runes:['Tir','Ral'],ttype:"스태프<span class=\"small\">(오브/완드 불가)<span>"},
  {title:"Lionheart<br>라이온하트</br>",runes:['Hel','Lum','Fal'],ttype:"갑옷"},
  {title:"Lore<br>학식</br>",runes:['Ort','Sol'],ttype:"투구"},
  {title:"Malice<br>악의</br>",runes:['Ith','El','Eth'],ttype:"근접 무기"},
  {title:"Melody<br>멜로디</br>",runes:['Shael','Ko','Nef'],ttype:"원거리 무기"},
  {title:"Memory<br>기억</br>",runes:['Lum','Io','Sol','Eth'],ttype:"스태프<span class=\"small\">(오브 불가)<span>"},
  {title:"Nadir",runes:['Nef','Tir'],ttype:"투구"},
  {title:"Radiance<br>찬란한 빛</br>",runes:['Nef','Sol','Ith'],ttype:"투구"},
  {title:"Rhyme<br>라임</br>",runes:['Shael','Eth'],ttype:"방패"},
  {title:"Silence<br>침묵</br>",runes:['Dol','Eld','Hel','Ist','Tir','Vex'],ttype:"무기"},
  {title:"Smoke<br>연기</br>",runes:['Nef','Lum'],ttype:"갑옷"},
  {title:"Stealth<br>스텔스</br>",runes:['Tal','Eth'],ttype:"갑옷"},
  {title:"Steel<br>스틸</br>",runes:['Tir','El'],ttype:"검/도끼/메이스"},
  {title:"Strength<br>스트랭쓰</br>",runes:['Amn','Tir'],ttype:"근접 무기"},
  {title:"Venom<br>베넘</br>",runes:['Tal','Dol','Mal'],ttype:"무기"},
  {title:"Wealth<br>웰쓰</br>",runes:['Lem','Ko','Tir'],ttype:"갑옷"},
  {title:"White",runes:['Dol','Io'],ttype:"완드"},
  {title:"Zephyr<br>제퍼</br>",runes:['Ort','Eth'],ttype:"원거리 무기"},
	/* 1.10 */
  {title:"Beast<br>야수</br>",runes:['Ber','Tir','Um','Mal','Lum'],ttype:"도끼/셉터/해머"},
  {title:"Bramble<br>검은딸기</br>",runes:['Ral','Ohm','Sur','Eth'],ttype:"갑옷"},
  {title:"Breath of the Dying<br>죽음의 숨결</br>",runes:['Vex','Hel','El','Eld','Zod','Eth'],ttype:"무기"},
  {title:"Call To Arms<br>콜 투 암스</br>",runes:['Amn','Ral','Mal','Ist','Ohm'],ttype:"무기"},
  {title:"Chaos<br>혼돈</br>",runes:['Fal','Ohm','Um'],ttype:"클러"},
  {title:"Chains of Honor<br>명예의 굴레</br>",runes:['Dol','Um','Ber','Ist'],ttype:"갑옷"},
  {title:"Crescent Moon<br>초승달</br>",runes:['Shael','Um','Tir'],ttype:"도끼/검/폴암"},
  {title:"Delirium<br>정신착란</br>",runes:['Lem','Ist','Io'],ttype:"투구"},
  {title:"Doom<br>파멸</br>",runes:['Hel','Ohm','Um','Lo','Cham'],ttype:"도끼/폴암/해머"},
  {title:"Duress<br>협박</br>",runes:['Shael','Um','Thul'],ttype:"갑옷"},
  {title:"Enigma<br>수수께끼</br>",runes:['Jah','Ith','Ber'],ttype:"갑옷"},
  {title:"Eternity<br>불멸</br>",runes:['Amn','Ber','Ist','Sol','Sur'],ttype:"근접 무기"},
  {title:"Exile<br>망명</br>",runes:['Vex','Ohm','Ist','Dol'],ttype:"팔라딘 방패"},
  {title:"Famine<br>기근</br>",runes:['Fal','Ohm','Ort','Jah'],ttype:"도끼/해머"},
  {title:"Gloom<br>우울</br>",runes:['Fal','Um','Pul'],ttype:"갑옷"},
  {title:"Hand of Justice<br>정의의 손길</br>",runes:['Sur','Cham','Amn','Lo'],ttype:"무기"},
  {title:"Heart of the Oak<br>오크의 심장</br>",runes:['Ko','Vex','Pul','Thul'],ttype:"스태프*/메이스"},
  {title:"Kingslayer<br>킹슬레이어</br>",runes:['Mal','Um','Gul','Fal'],ttype:"검/도끼"},
  {title:"Passion<br>열정</br>",runes:['Dol','Ort','Eld','Lem'],ttype:"무기"},
  {title:"Prudence<br>현명</br>",runes:['Mal','Tir'],ttype:"갑옷"},
  {title:"Sanctuary<br>성역</br>",runes:['Ko','Ko','Mal'],ttype:"방패"},
  {title:"Splendor<br>스플렌더</br>",runes:['Eth','Lum'],ttype:"방패"},
  {title:"Stone<br>스톤</br>",runes:['Shael','Um','Pul','Lum'],ttype:"갑옷"},
  {title:"Wind<br>윈드</br>",runes:['Sur','El'],ttype:"근접 무기"},
	/* 1.10 LADDER */
  {title:"Brand<br>인두</br>",runes:['Jah','Lo','Mal','Gul'],ttype:"원거리 무기",ladder:true},
  {title:"Death<br>죽음</br>",runes:['Hel','El','Vex','Ort','Gul'],ttype:"검/도끼",ladder:true},
  {title:"Destruction<br>파괴</br>",runes:['Vex','Lo','Ber','Jah','Ko'],ttype:"폴암/검",ladder:true},
  {title:"Dragon<br>드래곤</br>",runes:['Sur','Lo','Sol'],ttype:"갑옷/방패",ladder:true},
  {title:"Dream<br>꿈</br>",runes:['Io','Jah','Pul'],ttype:"투구/방패",ladder:true},
  {title:"Edge<br>모서리</br>",runes:['Tir','Tal','Amn'],ttype:"원거리 무기",ladder:true},
  {title:"Faith<br>신뢰</br>",runes:['Ohm','Jah','Lem','Eld'],ttype:"원거리 무기",ladder:true},
  {title:"Fortitude<br>인내</br>",runes:['El','Sol','Dol','Lo'],ttype:"무기/갑옷",ladder:true},
  {title:"Grief<br>고뇌</br>",runes:['Eth','Tir','Lo','Mal','Ral'],ttype:"검/도끼",ladder:true},
  {title:"Harmony<br>조화</br>",runes:['Tir','Ith','Sol','Ko'],ttype:"원거리 무기",ladder:true},
  {title:"Ice<br>얼음</br>",runes:['Amn','Shael','Jah','Lo'],ttype:"원거리 무기",ladder:true},
  {title:"Infinity<br>무한의 공간</br>",runes:['Ber','Mal','Ber','Ist'],ttype:"폴암",ladder:true},
  {title:"Insight<br>통찰력</br>",runes:['Ral','Tir','Tal','Sol'],ttype:"폴암/스태프",ladder:true},
  {title:"Last Wish<br>마지막 소원</br>",runes:['Jah','Mal','Jah','Sur','Jah','Ber'],ttype:"검/해머/도끼",ladder:true},
  {title:"Lawbringer<br>법률집행인</br>",runes:['Amn','Lem','Ko'],ttype:"검/해머/셉터",ladder:true},
  {title:"Oath",runes:['Shael','Pul','Mal','Lum'],ttype:"검/도끼/메이스",ladder:true},
  {title:"Obedience<br>순종</br>",runes:['Hel','Ko','Thul','Eth','Fal'],ttype:"폴암",ladder:true},
  {title:"Phoenix<br>불사조</br>",runes:['Vex','Vex','Lo','Jah'],ttype:"무기/방패",ladder:true},
  {title:"Pride<br>자존심</br>",runes:['Cham','Sur','Io','Lo'],ttype:"폴암",ladder:true},
  {title:"Rift<br>균열</br>",runes:['Hel','Ko','Lem','Gul'],ttype:"폴암/셉터",ladder:true},
  {title:"Spirit<br>스피리트</br>",runes:['Tal','Thul','Ort','Amn'],ttype:"검/방패",ladder:true},
  {title:"Voice of Reason<br>이성적인 항변</br>",runes:['Lem','Ko','El','Eld'],ttype:"검/메이스",ladder:true},
  {title:"Wrath<br>래쓰</br>",runes:['Pul','Lum','Ber','Mal'],ttype:"원거리 무기",ladder:true},
	/* POD LADDER */
  {title:"Pattern<br>은어</br>",runes:['Tal','Ort','Tir'],ttype:"클러",ladder:true},
  {title:"Plague<br>역병</br>",runes:['Cham','Fal','Um'],ttype:"무기",ladder:true},
    /* 1.11 */
    {title:"Bone<br>본</br>",runes:['Sol','Um','Um'],ttype:"갑옷<span class=\"small\">(네크로맨서)</span>",tclass:"Necromancer"},
    {title:"Enlightenment<br>계몽</br>",runes:['Pul','Ral','Sol'],ttype:"갑옷<span class=\"small\">(소서리스)</span>",tclass:"Sorceress"},
    {title:"Myth<br>신화</br>",runes:['Hel','Amn','Nef'],ttype:"갑옷<span class=\"small\">(바바리안)</span>",tclass:"Barbarian"},
    {title:"Peace<br>평화</br>",runes:['Shael','Thul','Amn'],ttype:"갑옷<span class=\"small\">(아마존)</span>",tclass:"Amazon"},
    {title:"Principle<br>원리원칙</br>",runes:['Ral','Gul','Eld'],ttype:"갑옷<span class=\"small\">(팔라딘)</span>",tclass:"Paladin"},
    {title:"Rain<br>비</br>",runes:['Ort','Mal','Ith'],ttype:"갑옷<span class=\"small\">(드루이드)</span>",tclass:"Druid"},
    {title:"Treachery<br>배반</br>",runes:['Shael','Thul','Lem'],ttype:"갑옷<span class=\"small\">(어쌔신)</span>",tclass:"Assassin"}
];

var Runes = {
	El:   { },
	Eld:  { },
	Tir:  { },
	Nef:  { },
	Eth:  { },
	Ith:  { },
	Tal:  { },
	Ral:  { },
	Ort:  { },
	Thul: { },
	Amn:  { },

	Sol:  { },
	Shael:{ },
	Dol:  { },
	Hel:  { },
	Io:   { },
	Lum:  { },
	Ko:   { },
	Fal:  { },
	Lem:  { },
	Pul:  { },
	Um:   { },

	Mal:  { },
	Ist:  { },
	Gul:  { },
	Vex:  { },
	Ohm:  { },
	Lo:   { },
	Sur:  { },
	Ber:  { },
	Jah:  { },
	Cham: { },
	Zod:  { }
};

var App =
{
	MAX_RUNES:      6,
	TEMPLATE_ROW:   'template', // template row class

	COOKIE_NAME:    'runes',
	COOKIE_DAYS:    120, // days
	COOKIE_SPLIT:   '.',

	haveRunes:       {},
	descriptionDivs: {},
	map_ids: 		 {},

	init:function()
	{
		this.initHaveRunes();
		this.initRunewordsTable();

		this.updateRunewords();
		this.initEvents();

		this.displayRunes();

		this.initHelp();
	},

	initHelp:function()
	{
		var fn = this.helpEventHandler.bindAsEventListener(this);
		dom.addEvent($('JsHelpOpen'), 'click', fn);
		dom.addEvent($('JsHelpClose'), 'click', fn);
	},

	resetRunes:function()
	{
		for (var rune_name in Runes){
			this.haveRunes[rune_name] = false;
		}
	},

	initHaveRunes:function()
	{
		this.resetRunes();

		this.loadRunes();

		if (this.countRunes()) {
			$('JsClearRunes').style.display = 'block';
		}
	},

	loadRunes:function()
	{
		var cookie_str = Cookies.read(this.COOKIE_NAME);
		if (cookie_str!==null)
		{
			var loadedRunes = cookie_str.split(this.COOKIE_SPLIT);
			for (var i=0; i<loadedRunes.length; i++)
			{
				var rune_id = loadedRunes[i];
				if (typeof Runes[rune_id] !=='undefined') {
					this.haveRunes[rune_id] = true;
				}
			}
		}
	},

	saveRunes:function()
	{
		var cookie_str = '';
		var runes = [];
		for (var rune_id in Runes)
		{
			if (this.haveRunes[rune_id]) {
				runes.push(rune_id);
			}
		}
		cookie_str = runes.join(this.COOKIE_SPLIT);
		Cookies.create(this.COOKIE_NAME, cookie_str, this.COOKIE_DAYS);
	},

	countRunes:function()
	{
		var count = 0;
		for (var rune_id in this.haveRunes) {
			count += this.haveRunes[rune_id] ? 1 : 0;
		}
		return count;
	},

	displayRunes:function()
	{
		for (rune_id in Runes)
		{
			this.updateRune(rune_id, this.haveRunes[rune_id]);
		}
	},

	initEvents:function()
	{
		// runes : add event handler and map links to ids
		var runesDiv = dom.getElementsByClassName(document,'div','runes')[0];
		var links = runesDiv.getElementsByTagName('a');
		for (i=0; i<links.length; i++)
		{
			var rune_id = /Rune-(\w+)/.test(links[i].id) ? RegExp.$1 : 'error';
			if (typeof Runes[rune_id] !== 'undefined') {
				Runes[rune_id].elem = links[i];
			}
		}

		dom.addEvent(runesDiv, ['click'], this.runesEventHandler.bindAsEventListener(this));

		// runeword description
		var table = this.runewordsTable;
		dom.delegateEvents(table, ['mouseover', 'mouseout','click'], this.tableEvents.bindAsEventListener(this));
	},

	initRunewordsTable:function()
	{
		var table = dom.getElementsByClassName(document,'table','runewords')[0];
		if (table)
		{
			this.runewordsTable = table;
			//this.map_rows = {};

			var tbody = table.tBodies[0];
			var rowTemplate = dom.getElementsByClassName(tbody,'tr',this.TEMPLATE_ROW)[0];

			var sImgLadder = '<img src='+this.ICON_LADDER+' />';

			for (r=0; r<Runewords.length; r++)
			{
				var runeword = Runewords[r];

				var newRow = rowTemplate.cloneNode(true);

				runeword.tableRow = newRow;

				tbody.appendChild(newRow);

				// runes
				for (i=0; i<this.MAX_RUNES; i++)
				{
					if (i<runeword.runes.length) {
						newRow.cells[i+1].innerHTML = runeword.runes[i];
					}
				}

				// description layer id
        _sLayerId=runeword.title.replace(/<br>([ㄱ-ㅎㅏ-ㅣ가-힣 ]+)<\/br>/g,'');
				sLayerId=_sLayerId.replace(/[^a-zA-Z0-9]/g,'_');
				/* Detect missing div
				if (!$(sLayerId)) {
					alert('woops '+sLayerId);
				}
				*/
				// lookup for later
				this.map_ids[sLayerId] = runeword;

				// title
				newRow.cells[0].innerHTML = '<a href="#" class="'+(runeword.ladder ? 'icon-ladder ' : '')+'ShowLayer" rel="'+sLayerId+'">' + runeword.title + '</a>';

				// item type
				newRow.cells[this.MAX_RUNES+1].innerHTML = this.autoNbsp(runeword.ttype);

				newRow.style.display = '';
			}
		}
	},

	tableEvents:function(e)
	{
		var elem = Event.element(e);
		if (elem.nodeName.toLowerCase()=='a' && /ShowLayer/.test(elem.className))
		{
			// the rel attribute of the link is the id of the corresponding div to show
			var descrDivId = elem.getAttribute('rel');

			var layerDiv = $('JsLayer');

			if (e.type==='mouseover')
			{
				var layerPos = dom.findPosition(elem);
				layerPos[0] += 50;
				layerPos[1] += elem.offsetHeight+1;  // dont overlap the link to keep mouse events simple

				this.setLayerContents(descrDivId);

				dom.setStyle(layerDiv,{
					display:	'block',
					position:	'absolute',
					left:		layerPos[0]+'px',
					top:		layerPos[1]+'px'
				});
			}
			else if (e.type==='mouseout')
			{
				dom.setStyle(layerDiv,{
					display:	'none'
				});
			}
			else if (e.type==='click')
			{
				Event.stop(e);
				return false;
			}
		}
		return true;
	},

	runesEventHandler:function(e)
	{
		var elem = Event.element(e);

		// clickable runes
		if (elem.nodeName.toLowerCase()==='a')
		{
			if (elem.id==='JsClearRunes')
			{
				$('JsClearRunes').style.display = 'none';
				this.resetRunes();
				this.displayRunes();
				this.updateRunewords();
				this.saveRunes();
			}
			else if (/Rune-(\w+)/.test(elem.id))
			{
				var rune_id =  RegExp.$1;
				var state = !this.haveRunes[rune_id];
				this.haveRunes[rune_id] = state;
				this.updateRune(rune_id, state);
				this.updateRunewords();

				// clear selection link
				$('JsClearRunes').style.display = this.countRunes() ? '' : 'none';

				// update cookie
				this.saveRunes();
			}

			Event.stop(e);
			return false;
		}

		return true;
	},

	helpEventHandler:function(e)
	{
		var elem = Event.element(e);
		var helpDiv = $('JsHelpBody');
		if (elem.id==='JsHelpOpen')
		{
			// allow toggle on/off
			this.helpOpened = !this.helpOpened;
			helpDiv.style.display = this.helpOpened ? 'block' : 'none';
		}
		else /* JsHelpClose */
		{
			helpDiv.style.display = 'none';
			this.helpOpened = false;
		}
	},

	setLayerContents:function(descrDivId)
	{
		var runeword = this.map_ids[descrDivId];
		var descrDiv = this.descriptionDivs[descrDivId];
		if (!descrDiv)
		{
			descrDiv = $(descrDivId);
			descrDiv.parentNode.removeChild(descrDiv);
			this.descriptionDivs[descrDivId] = descrDiv;
		}

		// set title part
		$('JsLayerTitle').innerHTML = runeword.title;
		$('JsLayerType').innerHTML = runeword.ttype;

		// set description
		var layerContentsDiv = $('JsLayerContents');
		layerContentsDiv.replaceChild(descrDiv, layerContentsDiv.firstChild);
		descrDiv.style.display = 'block';
	},


	autoNbsp:function(s)
	{
		if (s!='')
			return s;
		else
			return '&nbsp;';
	},

	updateRunewords:function()
	{
		var numComplete = 0;
		var moverows = [];
		for (i=0; i<Runewords.length; i++)
		{
			var runeword = Runewords[i];
			var row = runeword.tableRow;
			var runes = runeword.runes;
			var haveAll = 0;
			for (j=0; j<runes.length; j++)
			{
				if (this.haveRunes[runes[j]]) {
					haveAll++;
					cssClass = 'y';
				}
				else {
					cssClass = 'n';
				}
				row.cells[j+1].className = cssClass;
			}

			var bComplete = haveAll==j;

			row.className = bComplete ? 'complete' : 'incomplete';

			// number of runes missing
			row.cells[this.MAX_RUNES+2].innerHTML = runes.length - haveAll;

			// completed runewords
			if (bComplete) {
				numComplete++;
				/* mod.1.
				moverows.push(row);
				*/
			}
		}

		// move complete runewords to top of list
		/* mod.1.
		var tbody = this.runewordsTable.tBodies[0];
		for (i=0; i<numComplete; i++)
		{
			tbody.insertBefore(moverows[i], tbody.rows[i]);
		}*/

		// sort table on the Missing Runes column (i.e. by "completeness")
		var lnk = this.runewordsTable.tHead.rows[0].cells[this.MAX_RUNES+2].getElementsByTagName('a')[0];
		lnk.className = 'sortup'; //always sort down
		sortables.ts_resortTable(lnk, 8);

		if (numComplete) {
			this.setRunewordCount(' ('+numComplete+' available)');
		}
		else {
			this.setRunewordCount('');
		}
	},

	setRunewordCount:function(s)
	{
		$('runewords-count').innerHTML = s;
	},

	updateRune:function(rune_id, state)
	{
		Runes[rune_id].elem.className = state ? 'have' : 'have_not';
	}
}

dom.addEvent(window,'load',
	function(){
		sortables.initialize();
		App.init();
	}
);
