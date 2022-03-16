// check pw match
const passwdConfirm = document.querySelectorAll('.error');

passwdConfirm.forEach(x => x.addEventListener('input', checkSame));

function checkSame(e) {
  const passwd = document.querySelector('#passwd');
  const passwdConfirm = document.querySelector('#confirm_passwd');

  console.log(e.target.value);
  if(passwd.value == passwdConfirm.value){
    passwdConfirm.setAttribute('style', 'border-color: lightblue;')
    document.querySelector('button').disabled = false;
  } else {
    passwdConfirm.setAttribute('style', 'border-color: salmon;')
    document.querySelector('button').disabled = true;
  }
}