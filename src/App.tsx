import { Route, Routes } from 'react-router';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import StepTwo from './pages/onboarding/StepTwo';
import StepOne from './pages/onboarding/StepOne';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/onboarding" element={<OnboardingLayout />}>
          {/* <Route index element={<MarketingHome />} /> */}
          <Route path="step-one" element={<StepOne />} />
          <Route path="step-two" element={<StepTwo />} />
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