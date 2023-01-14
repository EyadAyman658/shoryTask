import { Fragment } from "react";
import { SEO } from "../../component/Seo/seo";
import { NamedRoutes } from "../../routes/index";
import meta from "../../utils/pages-meta.json";
import Content from './partials/Content'
import { useStyles } from "./style";
import {LandingProvider} from './hooks/useLandingHook'
const Landing=()=>{
  const classes=useStyles()
   return(
    <Fragment>
      <SEO
        title={meta["Landing"].title}
        pathname={window.location.origin + NamedRoutes.Landing}
        titleTemplate="Shory"
        image={meta["Landing"].image}
        description={meta["Landing"].description}
      />
    <div className={classes.pageWrapper}>
    <LandingProvider>
      <Content/>
    </LandingProvider>
   
    </div>
    </Fragment>
   )
}

export default Landing