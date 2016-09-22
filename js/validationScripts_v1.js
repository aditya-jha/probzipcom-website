
var locality = []
locality.push({
    name:'Malviya Nagar',
    sub_locality: ['Sector 1','Saras Parlour Road','Sant Khetshvar marg','Govt Girls Sen Sec School Road' ,'Sector 2','Surya Dev Marg','Shivanand marg','Sector 3','Sector 4','Shanti Path','Goshwami Tulsidas marg','Hari Marg','Sector 5','Saheed Amit Bhardwaj marg','Link Road','Park avenue Road','Block A Near Govind Marg','Sector 6','Swami Charan Marg','Sector 7','Near agra Bikaner Road','Sector 8','Lal Bahadur Nagar','Adinath Nagar','Sector 8 A','JLN Marg','Sector 9','Pradhan Marg','Sector 10','Sector 12 Road','Pardhan Marg','Sector 11','Sector 12 Road','Sector 12','Girdhar marg','Sector7 Road','Sector 13','Shree Ji Departmental Store Near Gaurav Tower','Sector 14','Kiran Homeopathic Clinic Near Girdhar Marg','ICICI Bank ATM Near Girdhar marg','Sector 15','Near Sector 12 Road'].sort()
});
locality.push({
    name:'Mansarovar',
    sub_locality: ['SFS Choraha','Vikrmaditya Marg','Thadi Market','Vijay Path','Meera Marg','Patel Marg','Shipra Path','Tegore lane','ParamHans Marg','Aravali Marg','VT Road','Heera path','Ganga Marg','Ayodhaya marg','Gurunanak Path Near Gurudwara','Panchvati marg','Rajat Path','Varun Path','Kiran Path','Swarn Path','Neelam Path','Chetan Path','Kaveri Path'].sort()
});
locality.push({
    name:'DurgaPura',
    sub_locality: ['Durgapura Overbridge','Nalanda Vihar','Jadon Nagar','Prithviraj Nagar','Shanti Nagar','Durgapura Railway Colony','Shanti Road No 2','Shanti Nagar jain Temple','Bajrang Vihar Road','Ekta Block','Dev Nagar RD Nr Tonk Rd','Community Center'].sort()
});
locality.push({
    name:'Mahaveer Nagar',
    sub_locality: ['Vishnu Puri','Shree Vihar','80Feet Road','Ekta Block','Shree Ayyapa Temple Road','Dalda factory Road','Green Nagar','Suresh Nagar','Arjun Nagar','Vasundhara Colony','Kirshi Nagar'].sort()
});

var phoneNumberValidation = function(divId) {
    var ref = document.getElementById('id_phone');
    var val = ref.value;

    if(isNaN(val)) {
        return false;
    }
    if(val[0]==='0' && (val.length!==11 || (val[1]!=='7' && val[1]!=='8' && val[1]!=='9'))) {
        return false;
    }
    else if(val[0]!=='0' && (val[0]!=='7' || val[0]!=='8' && val[0]!=='9') && val.length!==10) {
        return false;
    }
    return true;
};

var validateOrderFrom = function() {
    if(phoneNumberValidation('is_phone')==false) {
        document.getElementById('errors_phone').innerHTML = "Please check the phone number";
        return false;
    }
    else {
        document.getElementById('errors_phone').innerHTML = "";
    }
    if(document.getElementById('id_locality').value == '') {
        document.getElementById('errors_locality').innerHTML = "Select a locality";
        return false;
    }
    else {
        document.getElementById('errors_locality').innerHTML = "";
    }
    if(document.getElementById('id_sub_locality').value == '') {
        document.getElementById('errors_sub_locality').innerHTML = "Select a sub locality";
        return false;
    }
    else {
        document.getElementById('errors_sub_locality').innerHTML = "";
    }
    return true;
};

var populateSublocality = function() {
    var value = document.getElementById('id_locality').value;
    var ref = document.getElementById('id_sub_locality');
    var content = '<option value="" selected>Select a Sub locality</option>';
    var currLocality = -1

    for(var i=0;i<locality.length;i++) {
        if(value == locality[i].name) {
            currLocality = i;
            break;
        }
    }

    if(currLocality != -1) {
        for(var j=0;j<locality[currLocality].sub_locality.length;j++) {
            content += '<option value=\"' + locality[currLocality].sub_locality[j] + '\">' + locality[currLocality].sub_locality[j] + '</option>';
        }
    }

    ref.innerHTML = content;
    return;
}
