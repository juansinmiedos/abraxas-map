import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoianVhbnNpbm1pZWRvcyIsImEiOiJjazBkeG5yMjAwYmh1M2dwbXBreGhwaHowIn0.R0mwPQ9Ja7NH7AisDAeNvw';

export default class Map extends Component {
    state = {
        lng: -101.3544964,
        lat: 20.6786652,
        zoom: 6.8,
        selectedSection: this.props.region
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/light-v9',
            center: [this.state.lng, this.state.lat],
            boxZoom: true,
            zoom: this.state.zoom
        });

        console.log(this.props.region)

        if(this.state.selectedSection === 'Sector 1'){
            map.on('load', function () {
                map.addLayer({
                    'id': 'guadalajara',
                    'type': 'fill',
                    'source': {
                        'type': 'geojson',
                        'data': {
                            'type': 'Feature',
                            'properties': {
                                type: "Estado",
                                name: "Jalisco",
                                latitude: 20.3026,
                                longitude: -103.602
                            },
                            'geometry': {
                                'type': 'Polygon',
                                'coordinates': [[
                                    [-102.76049211292067, 21.748801987721578],
                                    [-102.66137671596266, 21.777844143492416],
                                    [-102.63031918038584, 21.773038234826714],
                                    [-102.51417639932131, 21.706117255007314],
                                    [-102.2863350088535, 21.67015045797723],
                                    [-102.2312479317466, 21.677746893704153],
                                    [-102.14577511263128, 21.74425446237356],
                                    [-102.07988766158626, 21.76792226779841],
                                    [-102.04914018437198, 21.865900784093924],
                                    [-101.9675947738797, 21.920987861200814],
                                    [-101.89173377209588, 21.955662747038133],
                                    [-101.84543168822184, 22.01746775982923],
                                    [-101.76419633699138, 21.962845770715774],
                                    [-101.69350297728056, 21.963362535552562],
                                    [-101.62311967683156, 21.930703030420517],
                                    [-101.57785112173183, 21.88088694907347],
                                    [-101.52875851079662, 21.876546129300408],
                                    [-101.5205419583447, 21.840941067476308],
                                    [-101.57971147280617, 21.77846426021742],
                                    [-101.57878129771872, 21.731076972524306],
                                    [-101.53335771388736, 21.66839345969035],
                                    [-101.53826697534062, 21.63687083612018],
                                    [-101.61505815311126, 21.584677638861905],
                                    [-101.63686560656248, 21.516671454324154],
                                    [-101.57464718262136, 21.42427399305032],
                                    [-101.57268347875953, 21.347586168067238],
                                    [-101.61144080285068, 21.2941527373589],
                                    [-101.68750851110885, 21.236068426716514],
                                    [-101.77194780234913, 21.230073961444162],
                                    [-101.81297888866474, 21.176330471474103],
                                    [-101.85504350465403, 21.148373521320963],
                                    [-101.88320716038211, 21.098144028823896],
                                    [-101.94821611228367, 21.02150787978482],
                                    [-102.04562618689897, 20.87247304869217],
                                    [-102.08794918530664, 20.790669257580163],
                                    [-102.08510698140198, 20.72932933188315],
                                    [-101.97689653194935, 20.62856028942585],
                                    [-101.98061723499741, 20.55528310822882],
                                    [-102.06071570466601, 20.468259996401713],
                                    [-102.09967973523159, 20.386817938696936],
                                    [-102.24277177609656, 20.340360826091256],
                                    [-102.29729041242254, 20.36221995728519],
                                    [-102.42131385005412, 20.34258291327086],
                                    [-102.4983117342991, 20.314729315905225],
                                    [-102.52797400589564, 20.284085191478425],
                                    [-102.59210445775444, 20.26661855690088],
                                    [-102.67775814492246, 20.218197740433396],
                                    [-102.7534899563963, 20.21173818626832],
                                    [-102.78139522970608, 20.18739858727497],
                                    [-103.0482264882618, 20.120425929712923],
                                    [-103.0857435780037, 20.081720282465028],
                                    [-103.07383216002613, 19.99728099212402],
                                    [-103.03641842307172, 19.970409246689343],
                                    [-102.93386654300657, 19.99040802680892],
                                    [-102.88800370960345, 19.961624254355826],
                                    [-102.77263607489492, 19.957076728108547],
                                    [-102.75721066034363, 19.8910342474326],
                                    [-102.72858191572281, 19.838892727017765],
                                    [-102.80984310627427, 19.820857652558658],
                                    [-102.81658688038017, 19.790471910550167],
                                    [-102.7965364252158, 19.688669338419203],
                                    [-102.76651241661473, 19.658903713135885],
                                    [-102.73747026174317, 19.582319240940194],
                                    [-102.74571265261682, 19.475607408255257],
                                    [-102.70739457899658, 19.46801097342768],
                                    [-102.61422197136686, 19.490851956552547],
                                    [-102.57525794080128, 19.412717189846433],
                                    [-102.54864457868428, 19.38687897408542],
                                    [-102.59768551277622, 19.340111803117225],
                                    [-102.59636776406101, 19.312981676163417],
                                    [-102.65750098328368, 19.23112620730859],
                                    [-102.72803931426287, 19.257532863850543],
                                    [-102.8844380361864, 19.202549140430506],
                                    [-102.93657955570195, 19.152991441501854],
                                    [-102.9544596023288, 19.097284246770585],
                                    [-102.98833350338839, 19.058423569891858],
                                    [-103.122252977393, 19.006127020745367],
                                    [-103.16677222365918, 18.96359731676273],
                                    [-103.21131730834708, 19.015067044508527],
                                    [-103.24234900640155, 19.01294831011643],
                                    [-103.29629920104722, 19.047726548741196],
                                    [-103.3481048246779, 18.977756659442235],
                                    [-103.47781267011865, 18.966439521566684],
                                    [-103.52522579623347, 19.092530015847586],
                                    [-103.49478837828093, 19.195211086222656],
                                    [-103.50698401619933, 19.268023180325514],
                                    [-103.49651953814617, 19.31608226248639],
                                    [-103.54455278188536, 19.348431708356628],
                                    [-103.60064754934484, 19.407756253348396],
                                    [-103.63532243518225, 19.487079575761783],
                                    [-103.67371802406751, 19.488474839742054],
                                    [-103.7441013254158, 19.426876532526023],
                                    [-103.8013846503813, 19.422225654390417],
                                    [-103.83347571473242, 19.397575995235968],
                                    [-103.93065324625032, 19.435144761821277],
                                    [-104.02488522017677, 19.4872346053927],
                                    [-104.05576188770097, 19.53715403952731],
                                    [-104.12221778042613, 19.472558498775697],
                                    [-104.15221594880703, 19.398196112860347],
                                    [-104.19032731775147, 19.369722397870333],
                                    [-104.21451188801319, 19.320371406315388],
                                    [-104.27262203707731, 19.314893704081186],
                                    [-104.30652177565943, 19.291639308906923],
                                    [-104.38473405583196, 19.27045197218078],
                                    [-104.42057166165284, 19.2880219595458],
                                    [-104.49924902981883, 19.249523016973683],
                                    [-104.53637854683241, 19.24885122340524],
                                    [-104.59226660781765, 19.17252513272868],
                                    [-104.63601640499992, 19.159369208000044],
                                    [-104.73355058499995, 19.22846100500007],
                                    [-104.80691484299987, 19.229071356000105],
                                    [-104.81570390499994, 19.2996279970001],
                                    [-104.88052324099993, 19.27912018400005],
                                    [-104.95787512899993, 19.318060614000046],
                                    [-105.01711992099992, 19.368475653000075],
                                    [-105.03933671799989, 19.43561432500013],
                                    [-105.07009843699987, 19.447780666000114],
                                    [-105.08771005999992, 19.56107250100007],
                                    [-105.15184485599994, 19.58417389500005],
                                    [-105.25076249899986, 19.666083075000074],
                                    [-105.29832923099994, 19.71857330900005],
                                    [-105.3516739569999, 19.804470119000058],
                                    [-105.4286189439999, 19.88930898600003],
                                    [-105.52562415299994, 20.03192780200004],
                                    [-105.54531816299989, 20.091620184000107],
                                    [-105.55321204299986, 20.20148346600007],
                                    [-105.62857011599992, 20.299994208000072],
                                    [-105.65565177199997, 20.31318116500006],
                                    [-105.6986814249999, 20.406910593000134],
                                    [-105.57559160099989, 20.48773834800005],
                                    [-105.46043860599993, 20.492621161000017],
                                    [-105.42918860599987, 20.50592682500013],
                                    [-105.3287343689999, 20.51373819200012],
                                    [-105.2436417309999, 20.58356354400007],
                                    [-105.23429574499995, 20.63612694500003],
                                    [-105.28380113199985, 20.670049756000083],
                                    [-105.24713619707774, 20.731499742219313],
                                    [-105.15282670788622, 20.857745266131104],
                                    [-105.09456153009047, 20.918103338997895],
                                    [-104.92433936227171, 20.931177476059673],
                                    [-104.79729285358229, 21.01763214800522],
                                    [-104.72789140506426, 21.009725653915808],
                                    [-104.62097286680432, 20.923115953238636],
                                    [-104.52291683614304, 20.906579495547277],
                                    [-104.47798417782755, 20.844154364232537],
                                    [-104.37801612014778, 20.77961050122363],
                                    [-104.35277218269005, 20.744108792187006],
                                    [-104.28561865887394, 20.708038642369445],
                                    [-104.2710717443655, 20.861517646022605],
                                    [-104.21288408093552, 20.97251862253637],
                                    [-104.20368567565336, 21.052100328267557],
                                    [-104.22412370534467, 21.16925080058394],
                                    [-104.2016702949481, 21.19860301381803],
                                    [-104.08237525071725, 21.205062567983106],
                                    [-104.03966467958126, 21.2198420273877],
                                    [-103.9825622217691, 21.27053660697885],
                                    [-103.94468339682125, 21.375181383014393],
                                    [-104.21030025944943, 21.51915192302286],
                                    [-104.15813290061278, 21.59676992399281],
                                    [-104.13436174240046, 21.693921617089018],
                                    [-104.0984207828928, 21.78445872638912],
                                    [-104.2159846672586, 21.91633698216603],
                                    [-104.39307980039246, 22.069764308975692],
                                    [-104.39866085541406, 22.085422268422946],
                                    [-104.3297503324119, 22.26437775353051],
                                    [-104.13182959685832, 22.34339101848076],
                                    [-104.0295877751557, 22.35119415888329],
                                    [-103.94819739519362, 22.378841051573232],
                                    [-103.92607988158122, 22.490152086449655],
                                    [-103.99183814231641, 22.574332994372185],
                                    [-103.98318233939338, 22.77158193635725],
                                    [-103.77875037283138, 22.73468496334044],
                                    [-103.79495093463785, 22.623994045189022],
                                    [-103.85132992203826, 22.568545233775524],
                                    [-103.85365536200534, 22.49139231989963],
                                    [-103.88742591027746, 22.46710439685043],
                                    [-103.86636776386123, 22.408710028744764],
                                    [-103.88902787983277, 22.34452790004252],
                                    [-103.88042375375325, 22.229806220480697],
                                    [-103.84817765977114, 22.197301744080193],
                                    [-103.76107703267888, 22.55960521091174],
                                    [-103.7387786528125, 22.59887929894049],
                                    [-103.65689734643534, 22.591334540056977],
                                    [-103.63834550713945, 22.538727932548056],
                                    [-103.60795976423168, 22.524413560237548],
                                    [-103.65043779227027, 22.43454824540524],
                                    [-103.68304562055889, 22.3219969752802],
                                    [-103.66325354691365, 22.239418036013518],
                                    [-103.67826555121418, 22.136891995269366],
                                    [-103.64214372365382, 22.112810776895856],
                                    [-103.5694091457155, 22.151671453774583],
                                    [-103.48863888157912, 22.134928290508157],
                                    [-103.44755611931936, 22.24184682876819],
                                    [-103.40644751683942, 22.25895172813975],
                                    [-103.39084123423551, 22.32871491096438],
                                    [-103.35864681709691, 22.348765367028022],
                                    [-103.42709225120642, 22.41759837476519],
                                    [-103.37278032135478, 22.51676544856656],
                                    [-103.24575965018762, 22.418218492389485],
                                    [-103.18516903422353, 22.380494697072606],
                                    [-103.18912228126818, 22.322203680855154],
                                    [-103.13176144103763, 22.338275051452428],
                                    [-103.09243567616554, 22.298329168955974],
                                    [-103.05502193921104, 22.30602895836978],
                                    [-103.04566850519733, 22.251510322043714],
                                    [-103.1291517811298, 22.140302639055506],
                                    [-103.0858727692129, 22.124644680507544],
                                    [-103.08946428105176, 22.074570216742103],
                                    [-103.12930680986135, 22.056690171913914],
                                    [-103.15607520160927, 21.99839915569646],
                                    [-103.20498694539111, 21.977418525444563],
                                    [-103.28901282368282, 21.9854800482656],
                                    [-103.31779659703527, 21.949616604023078],
                                    [-103.40073727060853, 21.92879100250275],
                                    [-103.5268277657888, 21.817221585207932],
                                    [-103.54238237244847, 21.789729723048282],
                                    [-103.52186682839138, 21.73593455713413],
                                    [-103.5192830069052, 21.600283922365094],
                                    [-103.59194006957856, 21.558684394369266],
                                    [-103.62612402990007, 21.498377997446568],
                                    [-103.66627661797149, 21.487939357815122],
                                    [-103.73394690572509, 21.524939684518785],
                                    [-103.70425879570682, 21.38417308182224],
                                    [-103.71392228898236, 21.329499416764634],
                                    [-103.74650427884936, 21.29725332278261],
                                    [-103.7361689929046, 21.227180080696144],
                                    [-103.67441565605765, 21.260252996978238],
                                    [-103.63710527189082, 21.254568590068345],
                                    [-103.62555559001841, 21.20888662381867],
                                    [-103.59144914406268, 21.192970281952938],
                                    [-103.50801754407433, 21.19607086827591],
                                    [-103.46486772336671, 21.162119451951156],
                                    [-103.36384029759164, 21.150388902026236],
                                    [-103.23167782277326, 21.07907542648971],
                                    [-103.1362831288633, 21.073752752987133],
                                    [-103.08297888936426, 21.04176504232288],
                                    [-103.04752885627167, 21.073959459461463],
                                    [-103.05590043835451, 21.265834051999917],
                                    [-103.02409359394423, 21.291362210297763],
                                    [-102.91492713098228, 21.28226715690377],
                                    [-102.83206397177487, 21.337974350735692],
                                    [-102.76860531258504, 21.33869782204681],
                                    [-102.68566463901186, 21.40101959877549],
                                    [-102.63406572095624, 21.534241440789884],
                                    [-102.64052527512132, 21.568347886745613],
                                    [-102.71070187089454, 21.577184556821834],
                                    [-102.77617590989027, 21.607828681248634],
                                    [-102.78253211126794, 21.65376902901741],
                                    [-102.76049211292067, 21.748801987721578]
                                ]]
                            }
                        }
                    },
                    'layout': {},
                    'paint': {
                    'fill-color': '#088',
                    'fill-opacity': 0.8
                    }
                });
            });
        } else {
            map.on('load', function () {
    
                map.addLayer({
                    'id': 'CDMX',
                    'type': 'fill',
                    'source': {
                    'type': 'geojson',
                    'data': {
                        type: "Feature",
                        properties: {
                        type: "Estado",
                        name: "Distrito Federal",
                        latitude: 19.3266,
                        longitude: -99.1369
                        },
                        geometry: {
                            type: "Polygon",
                            coordinates: [[
                                [-98.96395382420965, 19.08911937116207],
                                [-99.01780066606783, 19.08643219688838],    
                                [-99.04281205862961, 19.05780345316677],
                                [-99.13086870013038, 19.095527249383082],
                                [-99.22905392110158, 19.109221503169863],
                                [-99.28507117419531, 19.142449449082847],
                                [-99.30672359891489, 19.16849437131819],
                                [-99.3328718739378, 19.297685451922064],
                                [-99.30925574355766, 19.362591051036134],
                                [-99.25969804642766, 19.36088572779414],
                                [-99.17541378481828, 19.481550198482893],
                                [-99.15494991670525, 19.539582831382518],
                                [-99.12373735239689, 19.571053779008622],
                                [-99.03872962127494, 19.42728994457522],
                                [-99.04508582175325, 19.36310781497363],
                                [-98.99005042238905, 19.33654612880079],
                                [-98.95873450439385, 19.26135691968608],
                                [-98.96643429200898, 19.201205553293647],
                                [-98.94219804580312, 19.121365465144095],
                                [-98.96395382420965, 19.08911937116207]
                            ]]
                            }
                        }
                    },
                    'layout': {},
                    'paint': {
                        'fill-color': '#088',
                        'fill-opacity': 0.8
                    }
                    });
            });
        }
    }

    render() {
        return (
            <>
                <div ref={el => this.mapContainer = el} id='mapContainer' className="mapContainer" />
            </>
        )
    }
}