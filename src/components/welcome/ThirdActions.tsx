import s from './welcome.module.scss';
import { RouterLink } from 'vue-router';
import { FunctionalComponent } from 'vue';
import { SkipFeatures } from '../../shared/SkipFeatures';
export const ThirdActions: FunctionalComponent = () => {
  return <div class={s.actions}>
    <SkipFeatures class={s.fake}/> 
    <RouterLink to="/welcome/4" >下一页</RouterLink>
    <RouterLink to="/start" >跳过</RouterLink>
    <SkipFeatures /> 
  </div>
}

ThirdActions.displayName = 'ThirdActions'
