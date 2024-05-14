import Cookies from 'js-cookie';

function CheckLoginStatus(){

    const isLoggedIn=Cookies.get('isLoggedIn');

    if (isLoggedIn==='true'){
        console.log('사용자는 로그인 되어 있습니다.')
    }else{
        console.log('사용자는 로그인 되어 있지 않습니다.')
    }
};

export default CheckLoginStatus;