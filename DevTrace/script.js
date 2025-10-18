const searchbar=document.querySelector(".search-form-container");
const profileContainer= document.querySelector(".profile-container");
const noResults= document.querySelector("#no-results");
const btnMode= document.querySelector(".btn-mode");
const modeText= document.querySelector(".mode-text");
const modeIcon= document.querySelector(".mode-icon");
const searchBtn=document.querySelector("[SearchBtn]");
const searchBox=document.querySelector(".searchBox");
const profilePic=document.querySelector(".profilepic");
const userName=document.querySelector(".name");
const userID=document.querySelector("#username");
const date=document.querySelector(".date");

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const bio=document.querySelector(".bio");
const repos= document.querySelector("[Repos]");
const followers=document.querySelector("[Followers]");
const following=document.querySelector("[Following]");

const user_location= document.querySelector("#location");
const page= document.querySelector("#page");
const twitter= document.querySelector("#twitter");
const company=document.querySelector("#company");

const url = "https://api.github.com/users/";

const root = document.documentElement.style;

let darkMode=false;


//event listener

searchBtn.addEventListener("click",e=>{
    if(searchBox.value !== ""){
        getUserData(url + searchBox.value);
    }
});

searchBox.addEventListener("keydown",e=>{
    if(e.key=="Enter"){
        if(searchBox.value !== ""){
            getUserData(url + searchBox.value);
        }   
    }
});

searchBox.addEventListener("input",function(){
    noResults.style.display="none";
});

btnMode.addEventListener("click", function () {
    if (darkMode == false) {
      darkModeProperties();
    } else {
      lightModeProperties();
    }
  });


  // functions

  async function getUserData(gitUrl){
      try{
        //fetch data from url
        const response=await fetch(gitUrl);
        const data=await response.json();

        if (!response.ok) {
          throw new Error("User not found");
      }

        updateProfile(data);
      }

      catch(e){
      console.error('Error fetching data:', e);
      noResults.style.display = "block";
      

      }
  }


  
  function updateProfile(data){
    if(data.Message !== "Not Found"){
      noResults.style.display = "none";



      profilePic.src = `${data.avatar_url}`;
      userName.innerText = data.name === null ? data.login : data.name;
      userID.innerText=`@${data.login}`;
      userID.href = `${data.html_url}`;

      datesegments = data.created_at.split("T").shift().split("-");
      date.innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;

      bio.innerText = data.bio == null ? "This profile has no bio" : `${data.bio}`;
      repos.innerText = `${data.public_repos}`;
      followers.innerText = `${data.followers}`;
      following.innerText = `${data.following}`;


      function checkNull(param1,param2){
        if(param1 === "" || param1 === null){
            param2.style.opacity=0.5;
            param2.previousElementSibling.style.opacity=0.5;
            return false;
        }
        else{
          return true;
        }
      }

      user_location.innerText = checkNull(data.location, user_location) ? data.location : "Not Available";
      page.innerText = checkNull(data.blog, page) ? data.blog : "Not Available";
      page.href = checkNull(data.blog, page) ? data.blog : "#";
      twitter.innerText = checkNull(data.twitter_username, twitter) ? data.twitter_username : "Not Available";
      twitter.href = checkNull(data.twitter_username, twitter) ? `https://twitter.com/${data.twitter_username}` : "#";
      company.innerText = checkNull(data.company, company) ? data.company : "Not Available";
      
      
    searchbar.classList.toggle("active");
    profileContainer.classList.toggle("active");

    }

    else{
      noResults.style.display="block";
    }
  }

////   dark mode
  const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

if (localStorage.getItem("dark-mode")) {
  darkMode = localStorage.getItem("dark-mode");
  darkModeProperties();
} else {
  localStorage.setItem("dark-mode", prefersDarkMode);
  darkMode = prefersDarkMode;
  lightModeProperties();
}

function darkModeProperties() {
  root.setProperty("--lm-bg", "#141D2F");
  root.setProperty("--lm-bg-content", "#1E2A47");
  root.setProperty("--lm-text", "white");
  root.setProperty("--lm-text-alt", "white");
  root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
  modeText.innerText = "LIGHT";
  modeIcon.src = "./images/sun-icon.svg";
  root.setProperty("--lm-icon-bg", "brightness(1000%)");
  darkMode = true;
  localStorage.setItem("dark-mode", true);
}
function lightModeProperties() {
  root.setProperty("--lm-bg", "#F6F8FF");
  root.setProperty("--lm-bg-content", "#FEFEFE");
  root.setProperty("--lm-text", "#4B6A9B");
  root.setProperty("--lm-text-alt", "#2B3442");
  root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
  modeText.innerText = "DARK";
  modeIcon.src = "./images/moon-icon.svg";
  root.setProperty("--lm-icon-bg", "brightness(100%)");
  darkMode = false;
  localStorage.setItem("dark-mode", false);
}



getUserData(url + "psucho924");



