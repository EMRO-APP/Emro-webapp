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
        <Route path="/" element={<OnboardingLayout />}>
          <Route index element={<AuthOptions />} />
          <Route path="onboarding/step-one" element={<StepOne />} />
          <Route path="onboarding/step-two" element={<StepTwo />} />
          <Route path="onboarding/step-three" element={<StepThree />} />
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