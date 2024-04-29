//pages 단위
import Main from './pages/Main';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Project from './pages/Project';
import Curriculum from './pages/Curriculum';
import Profile from './pages/Profile';


const routes=[
    {
        path:'/',
        element:<Main/>,
        logo:false,
        previous:false,
        footer:false,
        name:'메인페이지'
    },
    {
        path:'/login',
        element:<Login />,
        logo:false,
        name:'로그인페이지'
    },
    {
        path:'/signin',
        element:<Signin />,
        logo:false,
        name:'회원가입페이지'
    },
    {
        path:'/project',
        element:<Project />,
        logo:false,
        name:'프로젝트페이지'
    },
    {
        path:'/curriculum',
        element:<Curriculum />,
        logo:false,
        name:'커리큘럼페이지'
    },
    {
        path:'/profile',
        element:<Profile />,
        logo:false,
        name:'프로필페이지'
    },
];

export default routes;