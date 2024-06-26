import Main from './pages/Main';
import Login from './pages/Login';
import JoinMembership from './pages/JoinMembership';
import Project from './pages/Project';
import Curriculum from './pages/Curriculum';
import Member from './pages/Member';
import Profile from './pages/Profile';
import ProjectUpload from './pages/ProjectUpload';
import ProjectDetail from './pages/ProjectDetail';
import CurriculumUpload from './pages/CurriculumUpload';
import CurriculumDetail from './pages/CurriculumDetail';

const routes=[
    {
        path:'/',
        element:<Main />,
        name:'메인페이지',
    },
    {
        path:'/login',
        element:<Login />,
        name:'로그인페이지',
    },
    {
        path:'/joinMembership',
        element:<JoinMembership />,
        name:'회원가입페이지',
    },
    {
        path:'/project',
        element:<Project />,
        name:'프로젝트페이지',
    },
    {
        path:'/projectUpload',
        element:<ProjectUpload />,
        name:'프로젝트업로드페이지'
    },
    {
        path:'/projectDetail',
        element:<ProjectDetail />,
        name:'프로젝트디테일페이지'
    },
    {
        path:'/curriculum',
        element:<Curriculum />,
        name:'커리큘럼페이지',
    },
    {
        path:'/curriculumUpload',
        element:<CurriculumUpload />,
        name:'커리큘럼업로드페이지',
    },
    {
        path:'/curriculumDetail',
        element:<CurriculumDetail />,
        name:'커리큘럼디테일페이지',
    },
    {
        path:'/member',
        element:<Member />,
        name:'기수별동아리원페이지',
    },
    {
        path:'/profile',
        element:<Profile />,
        name:'프로필수정페이지'
    },
]

export default routes;