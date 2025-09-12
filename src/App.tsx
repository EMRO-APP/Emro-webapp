import { Route, Routes } from 'react-router';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import StepTwo from './pages/onboarding/StepTwo';
import StepOne from './pages/onboarding/StepOne';
import AuthOptions from './pages/onboarding/AuthOptions';
import StepThree from './pages/onboarding/StepThree';
import Login from './pages/auth/Login';
import PasswordReset from './pages/auth/PasswordReset';
import CompletePasswordReset from './pages/auth/CompletePasswordReset';
import DashboardLayout from './pages/dashboard-layout';
import IndividualDashboard from './pages/dashboard/individual-dashboard';
import ProfileIndividual from './components/profiles/individual-profile';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<OnboardingLayout />}>
          <Route index element={<AuthOptions />} />
          <Route path="onboarding/step-one" element={<StepOne />} />
          <Route path="onboarding/step-two" element={<StepTwo />} />
          <Route path="onboarding/step-three" element={<StepThree />} />
          <Route path="onboarding/auth/login" element={<Login />} />
          <Route
            path="onboarding/auth/reset-password"
            element={<PasswordReset />}
          />
          <Route
            path="onboarding/auth/reset-password-complete"
            element={<CompletePasswordReset />}
          />
        </Route>

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path='individual' element={<IndividualDashboard />} />
          <Route path='individual/profile' element={<ProfileIndividual />} />
          {/* <Route element={<ProjectsLayout />}>
            <Route path=":pid" element={<Project />} />
            <Route path=":pid/edit" element={<EditProject />} />
          </Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App