import CIntroBanner from "~/components/home/CIntroBanner.tsx"
import CCompany from "~/components/home/CCompany.tsx"
import CBrowseJob from "~/components/CBrowseJob.tsx"
import CFeatureJob from "~/components/CFeatureJob.tsx"
import CSponsor from "~/components/CSponsor.tsx"

const home = () => {
  return (
    <section>
      <CIntroBanner />
      <CCompany />
      <CBrowseJob />
      <CFeatureJob />
      <CSponsor />
    </section>
  )
}

export default home
