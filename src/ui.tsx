import {
  engine,
  Material,
  MeshCollider,
  Transform,
  VisibilityComponent,
} from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { Cube } from './components'
import { createCube } from './factory'
import { openExternalUrl } from '~system/RestrictedActions'

var isVisible: boolean = false;
export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}
export function infoUi() {
  isVisible = true
  ReactEcsRenderer.setUiRenderer(uiInfo)
}
export function removeUi() {
  //ReactEcsRenderer.destroy
  isVisible = false
  ReactEcsRenderer.setUiRenderer(uiInfo)

}

const uiComponent = () => (
  <UiEntity
    
    uiTransform={{
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      //margin: '0 0 0 0',
      padding: 5,
      //display: isVisible? 'flex':'none'
    }}
    uiBackground={{ color: Color4.fromHexString("#70ac76ff")  }}
  >
    <UiEntity
      uiTransform={{
        width: '75%',
        height: '75%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      uiBackground={{ color: Color4.create(1, 1, 1, 1) }}
    >
      <Label
        onMouseDown={() => {console.log('Player Position clicked !')}}
        //value={`Player: ${getPlayerPosition()}`}
        value={`Hai più di 18 anni?`}
        fontSize={30}
        uiTransform={{ width: '100%', height: 500 } }
        color={Color4.fromHexString("#70ac76ff")}
      />
      {/* <Label
        onMouseDown={() => {console.log('# Cubes clicked !')}}
        value={`# Cubes: ${[...engine.getEntitiesWith(Cube)].length}`}
        fontSize={18}
        uiTransform={{ width: '100%', height: 30 } }
        color={Color4.fromHexString("#70ac76ff")}
      /> */}
      <Button
        uiTransform={{ width: 100, height: 40, margin: 8 }}
        value='Si'
        variant='primary'
        fontSize={14}
        onMouseDown={() => {
          removeUi()
          const cube = engine.getEntityOrNullByName('Solid Red')
          if (cube) {
          engine.removeEntity(cube)
          }
        }}
      />
     </UiEntity>
  </UiEntity>
)

const uiInfo = () => (
  <UiEntity
    
    uiTransform={{
      width: '100%',
      height: '50%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      //margin: '0 0 0 0',
      padding: 5,
      display: isVisible? 'flex':'none'
    }}
    uiBackground={{ color: Color4.create(1, 1, 1, 0) }}
  >
    <UiEntity
      uiTransform={{
        width: '50%',
        height: '75%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      uiBackground={{ color: Color4.create(1, 1, 1, 1) }}
    >
      <Label
        //onMouseDown={() => {console.log('Player Position clicked !')}}
        //value={`Player: ${getPlayerPosition()}`}
        value={`Clicca per avviare il video`}
        fontSize={30}
        uiTransform={{ width: '100%', height: '100%' } }
        color={Color4.fromHexString("#70ac76ff")}
      />
     </UiEntity>
  </UiEntity>
)

function getPlayerPosition() {
  const playerPosition = Transform.getOrNull(engine.PlayerEntity)
  if (!playerPosition) return ' no data yet'
  const { x, y, z } = playerPosition.position
  return `{X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}, z: ${z.toFixed(2)} }`
}

