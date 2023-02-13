const generateBtn = document.querySelector(".generateBtn");
const copyBtn = document.querySelector(".copyBtn");
const outputDiv = document.querySelector(".generatedPassword");
const showMessage = document.querySelector(".showMessage");

const characters = "38*#JD0923KS@9sj938sLK#)*9$)_&*@SJ*";
const generatePassword = (passLength = 8) => {
  let password = "";
  for (let i = 0; i < passLength; i++) {
    const position = Math.floor(Math.random() * characters.length);
    password += characters.substring(position, position + 1);
  }
  return password;
};
const generatePasswordHandler = () => {
  const generatedPassword = generatePassword();
  outputDiv.value = generatedPassword;
  showMessage.classList.remove("show");
};
generateBtn.addEventListener("click", generatePasswordHandler);

const copyPasswordHandler = () => {
  const copyThis = outputDiv;
  navigator.clipboard.writeText(copyThis.value);
  showMessage.classList.add("show");
};

copyBtn.addEventListener("click", copyPasswordHandler);
