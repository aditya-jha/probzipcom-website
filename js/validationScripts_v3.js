
document.addEventListener("DOMContentLoaded", function(event) {
    var currDate = new Date();
    if(currDate.getHours() >= 19 || currDate.getHours() < 9) {
        var ref = document.getElementById('chooseCustomer').style.display = "none";
        document.getElementById('place_order').value = "We only provide our services between 10am and 7pm IST";
        document.getElementById('place_order').disabled = true;
        //document.getElementById('page_errors').innerHTML = "No more orders today";
        //alert("We only provide our services between 10am and 7pm");
        return false;
    }
});

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
locality.push({
    name:'Sodhala Jaipur',
    sub_locality:['Prempura Village','Milltary Cantoment','Netaji nagar','Shiv Colony','Hatwara','Krishna Puri','Jamuna Nagar','Laxmi Nagar','Sushilpura','rajeev Nagar','Kamla Nehru Nagar','Nirman Nagar','Shyam Nagar','Hasanpura Road','Hathori'].sort()
});
locality.push({
    name:'22 Godown',
    sub_locality:['KalyanPuri Extension','Ganesh nahar','Sundar Singh Bhandar Ngr','Nandpuri','Mitra nagar','Hawa Sadak','Ram nagar','Nandpuri II','Shiv marg','Geejgarh Vihar','Sharma Colony','Bhagwan Marg','22 Godown Flyover','Sehkar marg','Dundlod House Coloy','Water tank'].sort()
});
locality.push({
    name:'GopalPura',
    sub_locality:['Shiv Colony','Shanti Colony','80 Feet Road','Ram nagar','Ganesh Nagar','Mohan Colony','S.B Vihar','Balaji Vihar','Agrsen Nagar','Kirshna Nagar','Ganga Vihar Colony','Mahesh Nagar','Bal nagar','Bhagwati nagar','60 Feet Road','Triveni Nagar','Patel Marg'].sort()
});
locality.push({
    name:'Rajapark',
    sub_locality:['Shanti Path','Vijay Path','Prabhu Marg','Udai Marg','Vidhayala Marg','Sector 1','Sector 2','Sector 3','Sector 4','Sector 5','Sector 6','Sector 7','Jawahar nagar','Geet mandiar Area','Patrkar Colony','Burmese Colony','Burmese Colony','Sindhi Colony','Saket Colony','Govind marg','Ashok Chowk','Dadho Ka Bagh','Mukti Marg','Gurunanak Pura','AnandPuri','Janta Colony','Shiv Shankar Colony','Frontier Colony','Ravi Path'].sort()
});
locality.push({
    name:'Vaishali nagar',
    sub_locality:['Prince Road','Queens Road','Gandhi Path','Vaishali Marg','Sirsi Road','Chitrakoot','Sanjay Nagar','Heera nagar','Tegore Nagar','Vidhyut nagar','Mahadev nagar','Moti Nagar','Bashli Nagar','Arpit nagar','Gautam Nagar','Rathore Nagar','Pratap Nagar','Girnar Colony','Bhula Patel Nagar','Mahatma gandhi Nagar','Guru Jhambeshwar Nagar','Valmiki Marg','Vashitha Marg','Veer Vihar','Urmila Marg','Raghu Marg','Ahilya Marg','Sumitra Marg','Tulsi marg','Tara Marg','Angad Marg','Garud marg','Shiv Marg','Laxman Marg','Surya Marg','Kashyap Marg','Nayar Marg','Arjun path','Bhomiya Marg','Janki Marg','Yadav marg','Rajendra nagar','Suroyodya Patel Nagar'].sort()
});
locality.push({
    name:'Vidhyadhar Nagar',
    sub_locality:['Sector 1','Sector 2','Sector 3','Sector 4','Sector 5','Sector 6','Sector 8','Ram Marg','Vijay Bari','Malviye Nagar','Central Spine Road','Radha Govind Colony','Awho Road','Jagdamba Colony','L.S. nagar','Naya Khera','Meal Colony','Shiv Park','Kishan Bagh','Swankar Colony','Sanjay Colony','Subhash Colony','Mall Road'].sort()
});
locality.push({
    name:'Bapu Nagar',
    sub_locality:['Rajendra Marg','Moti Marg','Pareek Marg','Gandhi Marg','Siwar Area','Jagraj Marg','University marg','Janta Colony','Krishna Marg'].sort()
});
locality.push({
    name:'Pratap Nagar',
    sub_locality:['Sector 3','Sector 5','Sector 6','Sector 7','Sector 8','Sector 9','Sector 10','Sector 11','Sector 12','Sector 13','Sector 14','Sector 15','Sector 16','Sector 17','Sector 18','Sector 19','Sector 21','Sector 22' ,'Sector 23','Sector 28' ,'Sector 29','Shani nagar' ,'Kumbha Marg' ,'Haldighati Marg' ,'Pannadhaye Circle','NRI Circle','Bheruji Circle' ,'Maharana Pratap Circle','Dwarkapuri' ,'Savitri Vihar','Shoipur,Gharondha','Gandhi Kuteer','Pratap Enclave'].sort()
});
locality.push({
    name:'Sanganer',
    sub_locality:['Kushal nagar','Ramdara Colony','Suraj nagar','Gopi Nagar','Dusad Nagar','Shyam Vihar Colony','Bharav Colony','Dada Gurudev nagar','Ganga Vihar Colony','Tikky Colony','Khatik Mohalla','Kagzi Mohalla','Shyam Leela Shah Colony','Raigarh Mohalla','Boharon Ka Mohalla','Anita Colony','Rampura Road','Priyanka Colony','Ashok vihar','Padmavati Colony','Nagar Nigam','Dinesh Colony','Vitthal Namdev Nagar','Dada Bari'].sort()
});
locality.push({
    name:'C-Scheme',
    sub_locality:['Vaniki Marg','Yudhishthir Marg','Subhash Marg','Sahdev Marg','Tilak Marg','Aazad Marg','Sardar Patel Rd','Prithviraj Rd','Ashok Nagar','Krishna Marg','Ashok Marg','Lajpat Marg','Sarozini Marg','Rajmandir Cinema','Patrkar Colony'].sort()
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

    if(phoneNumberValidation('id_phone')==false) {
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
