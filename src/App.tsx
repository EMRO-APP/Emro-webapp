import { Route, Routes } from 'react-router';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import StepTwo from './pages/onboarding/StepTwo';
import StepOne from './pages/onboarding/StepOne';
import AuthOptions from './pages/onboarding/AuthOptions';
import StepThree from './pages/onboarding/StepThree';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/onboarding" element={<OnboardingLayout />}>
          {/* <Route index element={<MarketingHome />} /> */}
          <Route path="step-one" element={<StepOne />} />
          <Route path="auth-options" element={<AuthOptions />} />
          <Route path="step-two" element={<StepTwo />} />
          <Route path="step-three" element={<StepThree />} />
        </Route>

        {/* <Route path="projects">
          <Route index element={<ProjectsHome />} />
          <Route element={<ProjectsLayout />}>
            <Route path=":pid" element={<Project />} />
            <Route path=":pid/edit" element={<EditProject />} />
          </Route>
        </Route> */}
      </Routes>
    </>
  );
}

export default App