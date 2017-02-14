const sponsors = [	
	{
		name: "株式会社リアズ",
		photo: "sponsor_bnr_reas.png",
		link: "http://reas.jp/",
		rank: 2,
	},
	{
		name: "株式会社chatbox",
		photo: "sponsor_bnr_chatbox.png",
		link: "http://chatbox-inc.com/",
		rank: 1,
	},
	{
		name: "デザイナーのイラストノート",
		photo: "sponsor_bnr_illustrationNoteOfDesigner.png",
		link: "https://in.spicagraph.com/",
		rank: 1,
	},
	{
		name: "さくらインターネット株式会社",
		photo: "sponsor_bnr_sakuraInternet.png",
		link: "https://www.sakura.ad.jp/",
		rank: 1,
	},
	{
		name: "サイボウズ株式会社",
		photo: "sponsor_bnr_cybozu.png",
		link: "http://blog.cybozu.io/",
		rank: 3,
	},
	{
		name: "株式会社TAM",
		photo: "sponsor_bnr_tam.png",
		link: "http://www.tam-tam.co.jp/",
		rank: 1,
	},
	{		
		name: "中央システム株式会社",
		photo: "sponsor_bnr_chuoSystem.png",
		link: "http://www.chuosystem.co.jp/",
		rank: 1,
	},
	{		
		name: "株式会社クリーク・アンド・リバー社",
		photo: "sponsor_bnr_creeekAndRiver.png",
		link: "http://www.cri.co.jp/",
		rank: 2,
	},
	{		
		name: "株式会社メルカリ",
		photo: "sponsor_bnr_mercari.png",
		link: "https://www.mercari.com/jp/jobs/",
		rank: 1,
	},
	{
		name: "アンジップ株式会社",
		photo: "sponsor_bnr_unzip.png",
		link: "https://www.unzip.co.jp/",
		rank: 1,
	},
    {
        name: "株式会社ディー・エヌ・エー",
        photo: "sponsor_bnr_DeNA.png",
        link: "http://design.dena.com/",
        rank: 2,
    },
    {
        name: "株式会社ロックオン",
        photo: "sponsor_bnr_lockon.png",
        link: "http://www.ec-cube.net/",
        rank: 2,
    },
    {
        name: "株式会社ピクセルグリッド",
        photo: "sponsor_bnr_pixelGrid.png",
        link: "https://www.pxgrid.com/ ",
        rank: 1,
    },
    {
        name: "有限会社アップルップル",
        photo: "sponsor_bnr_appleple.png",
        link: "https://www.appleple.com",
        rank: 1,
    },
]

let result = {}

sponsors.forEach((sponsor) => {	
	if(result["rank" + sponsor.rank] === undefined) 
		result["rank" + sponsor.rank] = []
	
	result["rank" + sponsor.rank].push(sponsor)
})

result.media = [
	{
        name: "株式会社メルカリ",
        photo: "sponsor_bnr_gihyo.png",
        link: "http://gihyo.jp/",
        rank: 1,
	}
]

result.supported = [
	{
        name: "ng-kyoto",
        photo: "sponsor_bnr_ngkyoto.png",
        link: "https://ng-kyoto.github.io/",
        rank: 1,
	}
]


module.exports = result