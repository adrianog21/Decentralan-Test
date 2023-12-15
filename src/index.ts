import {
  Animator,
  AudioSource,
  AudioStream,
  AvatarAttach,
  EasingFunction,
  engine,
  Entity,
  EntityUtils,
  GltfContainer,
  InputAction,
  Material,
  MeshCollider,
  MeshRenderer,
  PBMeshCollider_SphereMesh,
  PBMeshRenderer_SphereMesh,
  pointerEventsSystem,
  Schemas,
  Transform,
  Tween,
  VideoPlayer,
  VisibilityComponent,
} from '@dcl/sdk/ecs'
import { Color4, Quaternion, Vector3 } from '@dcl/sdk/math'
import { initAssetPacks } from '@dcl/asset-packs/dist/scene-entrypoint'


import { bounceScalingSystem, circularSystem } from './systems'

import { infoUi, removeUi, setupUi } from './ui'
import { BounceScaling, Spinner } from './components'
import { createCube } from './factory'
import {openExternalUrl} from '~system/RestrictedActions'
import * as utils from '@dcl-sdk/utils'

// Defining behavior. See `src/systems.ts` file.
engine.addSystem(circularSystem)
engine.addSystem(bounceScalingSystem)
let videos: Entity[] = []

export function main() {

  
  //Rotate(door,120,false)
  SetDoors()
  // draw UI
  setupUi()
  videoroof()

  //BOTTONI ASCENSORE
  const Bottone11 = engine.getEntityOrNullByName('Bottone11')
  const Bottone21 = engine.getEntityOrNullByName('Bottone21')
  const Bottone31 = engine.getEntityOrNullByName('Bottone31')
  if (Bottone31 && Bottone21 && Bottone11) {
    pointerEventsSystem.onPointerDown(
      { entity: Bottone31, opts: { button: InputAction.IA_POINTER, hoverText: 'LOBBY' } },
      () => {
        Move(0)
      }
    )
    pointerEventsSystem.onPointerDown(
      { entity: Bottone21, opts: { button: InputAction.IA_POINTER, hoverText: 'LOBBY' } },
      () => {
        Move(0)
      }
    )
    pointerEventsSystem.onPointerDown(
      { entity: Bottone11, opts: { button: InputAction.IA_POINTER, hoverText: 'LOBBY' } },
      () => {
        Move(0)
      }
    )
    }
  const bottone12 = engine.getEntityOrNullByName('Bottone12')
  const bottone22 = engine.getEntityOrNullByName('Bottone22')
  const bottone32 = engine.getEntityOrNullByName('Bottone32')
  if(bottone32 && bottone22 && bottone12){
    pointerEventsSystem.onPointerDown(
      { entity: bottone32, opts: { button: InputAction.IA_POINTER, hoverText: 'MUSEUM' } },
      () => {
        Move(6)
      }
    )
    pointerEventsSystem.onPointerDown(
      { entity: bottone22, opts: { button: InputAction.IA_POINTER, hoverText: 'MUSEUM' } },
      () => {
        Move(6)
      }
    )
    pointerEventsSystem.onPointerDown(
      { entity: bottone12, opts: { button: InputAction.IA_POINTER, hoverText: 'MUSEUM' } },
      () => {
        Move(6)
      }
    )
  }

  const bottone13 = engine.getEntityOrNullByName('Bottone13')
  const bottone23 = engine.getEntityOrNullByName('Bottone23')
  const bottone33 = engine.getEntityOrNullByName('Bottone33')

 if(bottone13 && bottone23 && bottone33){
    pointerEventsSystem.onPointerDown(
      { entity: bottone13, opts: { button: InputAction.IA_POINTER, hoverText: 'ROOF' } },
      () => {
        Move(12)
      }
    )
    pointerEventsSystem.onPointerDown(
      { entity: bottone23, opts: { button: InputAction.IA_POINTER, hoverText: 'ROOF' } },
      () => {
        Move(12)
      }
    )
    pointerEventsSystem.onPointerDown(
      { entity: bottone33, opts: { button: InputAction.IA_POINTER, hoverText: 'ROOF' } },
      () => {
        Move(12)
      }
    )
  }

  //VIDEO PLAYER
  DispositiviVideo()

  //LINK ESTERNO
  const link1 = engine.getEntityOrNullByName('Vetro'+1)
  if(link1){
    pointerEventsSystem.onPointerDown(
      { entity: link1, opts: { button: InputAction.IA_POINTER, hoverText: 'Apri Link' } },
      () => {
        openExternalUrl({url:"https://docs.decentraland.org"})
      }
    )
  }

  const link2 = engine.getEntityOrNullByName('Vetro2')
  if(link2){
    pointerEventsSystem.onPointerDown(
      { entity: link2, opts: { button: InputAction.IA_POINTER, hoverText: 'Apri Link' } },
      () => {
        openExternalUrl({url:"https://docs.decentraland.org"})
      }
    )
  }

 // engine.addSystem(() => {
//   const roofTrigger = engine.getEntityOrNullByName("RoofTrigger")
//   if(roofTrigger){
//   utils.triggers.addTrigger(
//   roofTrigger,
//   utils.NO_LAYERS,
//   utils.LAYER_1,
//   [{ type: 'box', scale: {x:4,y:1,z:10} }],
//   function () {
//     infoUi()
//   }, function(){
//     removeUi()
//   }
// )}
//  // })
//  const videoTrigger = engine.getEntityOrNullByName("VideoTrigger")
//  if(videoTrigger){
//  utils.triggers.addTrigger(
//  videoTrigger,
//  utils.NO_LAYERS,
//  utils.LAYER_1,
//  [{ type: 'box' ,scale: {x:10,y:1,z:4}}],
//  function () {
//    infoUi()
//  }, function(){
//    removeUi()
//  }
// )}

}


function DispositiviVideo(){

  const screen1 = engine.getEntityOrNullByName('video11')
  const screen2 = engine.getEntityOrNullByName('video12')
  const screen3 = engine.getEntityOrNullByName('video13')
  const screen4 = engine.getEntityOrNullByName('video14')
  const screen5 = engine.getEntityOrNullByName('video15')
  const screen6 = engine.getEntityOrNullByName('video16')
  const screen7 = engine.getEntityOrNullByName('video17')
  if(!screen1||!screen2||!screen3||!screen4||!screen5||!screen6||!screen7)return
  var url = 'http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4'
  SetVideo(screen1, url)
  var url = 'http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4'
  SetVideo(screen2, url)
  var url = 'http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4'
  SetVideo(screen3, url)
  var url = 'http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4'
  SetVideo(screen4, url)
  var url = 'http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4'
  SetVideo(screen5, url)
  var url = 'http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4'
  SetVideo(screen6, url)
  var url = 'http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4'
  SetVideo(screen7, url)

  //let videos: Entity[] = [screen1,screen2,screen3,screen4,screen5,screen6,screen7]
/*
  const disp1 = engine.getEntityOrNullByName('mini')
  const disp2 = engine.getEntityOrNullByName('nano')
  const disp3 = engine.getEntityOrNullByName('pro')
  const disp4 = engine.getEntityOrNullByName('hyper')
  const disp5 = engine.getEntityOrNullByName('uniq')
  const disp6 = engine.getEntityOrNullByName('x2')
  const disp7 = engine.getEntityOrNullByName('x2air')
  if(!disp1||!disp2||!disp3||!disp4||!disp5||!disp6||!disp7)return


  pointerEventsSystem.onPointerDown(
    { entity: disp1, opts: { button: InputAction.IA_POINTER, hoverText: 'Mini' } },
    () => {
      console.log(videos[0])
      StopVideos()
      url = "http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4"
      const videoPlayer = VideoPlayer.getMutable(videos[0])
              videoPlayer.src = url
              videoPlayer.position = 0
              videoPlayer.playing = true
    }
  )

  pointerEventsSystem.onPointerDown(
    { entity: disp2, opts: { button: InputAction.IA_POINTER, hoverText: 'Nano' } },
    () => {
      StopVideos()
      url = "http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4"
      const videoPlayer = VideoPlayer.getMutable(videos[1])
              videoPlayer.src = url
              videoPlayer.position = 0
              videoPlayer.playing = true
    }
  )

  pointerEventsSystem.onPointerDown(
    { entity: disp3, opts: { button: InputAction.IA_POINTER, hoverText: 'Pro' } },
    () => {
      StopVideos()
      url = "http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4"
      const videoPlayer = VideoPlayer.getMutable(videos[2])
              videoPlayer.src = url
              videoPlayer.position = 0
              videoPlayer.playing = true
    }
  )

  pointerEventsSystem.onPointerDown(
    { entity: disp4, opts: { button: InputAction.IA_POINTER, hoverText: 'Hyper' } },
    () => {
      StopVideos()
      url = "http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4"
      const videoPlayer = VideoPlayer.getMutable(videos[3])
              videoPlayer.src = url
              videoPlayer.position = 0
              videoPlayer.playing = true
    }
  )

  pointerEventsSystem.onPointerDown(
    { entity: disp5, opts: { button: InputAction.IA_POINTER, hoverText: 'Uniq' } },
    () => {
      StopVideos()
      url = "http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4"
      const videoPlayer = VideoPlayer.getMutable(videos[4])
              videoPlayer.src = url
              videoPlayer.position = 0
              videoPlayer.playing = true
    }
  )

  pointerEventsSystem.onPointerDown(
    { entity: disp6, opts: { button: InputAction.IA_POINTER, hoverText: 'X2' } },
    () => {
      StopVideos()
      url = "http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4"
      const videoPlayer = VideoPlayer.getMutable(videos[5])
              videoPlayer.src = url
              videoPlayer.position = 0
              videoPlayer.playing = true
    }
  )

  pointerEventsSystem.onPointerDown(
    { entity: disp7, opts: { button: InputAction.IA_POINTER, hoverText: 'X2air' } },
    () => {
      StopVideos()
      url = "http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4"
      const videoPlayer = VideoPlayer.getMutable(videos[6])
              videoPlayer.src = url
              videoPlayer.position = 0
              videoPlayer.playing = true
    }
  )

  */
}

function StopVideos(){
  videos.forEach(video => {
    const videoPlayer = VideoPlayer.getMutable(video)
              videoPlayer.position = 0
              videoPlayer.playing = false
  });
}




////

export const WheelSpinComponent = engine.defineComponent("WheelSpinComponent", {
	spinning: Schemas.Boolean,
	speed: Schemas.Vector3
})

function SetDoors(){

  for(let i = 1; i<10; i++){
    const sensor = engine.getEntityOrNullByName('sensor'+ i)
    if(!sensor)return;
    
    engine.addSystem(() => {
        const playerPosition = Transform.getOrNull(engine.PlayerEntity)
        if (playerPosition) {
          
          const transformP = Transform.get(sensor)
          const dist = Vector3.distanceSquared(transformP.position, playerPosition.position)
          const doorDx = engine.getEntityOrNullByName('doordx'+ i)
          const doorSx = engine.getEntityOrNullByName('doorsx'+ i)
          if(!doorDx||!doorSx)return
          if (dist > 3) {
            Close(doorDx, -50)
            Close(doorSx, 50)
          }else{
            Open(doorDx, -50)
            Open(doorSx, 50)
          }
        }
      })
      }
  
}

function Move(p: number){
  const piano = engine.getEntityOrNullByName('Ascensori')

  if(piano){
    
      let startPos = Transform.get(piano).position
      let endPos = Vector3.create(startPos.x, p, startPos.z)
   // utils.tweens.startTranslation(piano, startPos, endPos, 2, utils.InterpolationType.LINEAR)
   Tween.createOrReplace(piano, {
    mode: Tween.Mode.Move({
      start: startPos,
      end: endPos
    }),
    duration: 1500,
    easingFunction: EasingFunction.EF_EASESINE
  })     
  }
}

function Open(obj: Entity, r: number){
  // Define start and end directions
  let startRot = Quaternion.fromEulerDegrees(0, 0, 0)
  let endRot = Quaternion.fromEulerDegrees(0, r, 0)
  Tween.createOrReplace(obj, {
    mode: Tween.Mode.Rotate({
      start: startRot,
      end: endRot
    }),
    duration: 500,
    easingFunction: EasingFunction.EF_EASESINE
  })     
  }

  //utils.tweens.startRotation(obj, startRot, endRot, 200)

function Close(obj: Entity, r: number){
  // Define start and end directions
  let endRot = Quaternion.fromEulerDegrees(0, 0, 0)
  let startRot = Quaternion.fromEulerDegrees(0, r, 0)
  Tween.createOrReplace(obj, {
    mode: Tween.Mode.Rotate({
      start: startRot,
      end: endRot
    }),
    duration: 500,
    easingFunction: EasingFunction.EF_EASESINE
  })     
  }



function SetVideo(screen2: Entity, url: string){
 
  const screen = engine.addEntity()
  var t = Transform.get(screen2)
  
  Transform.create(screen, {
    parent: t.parent,
    position: t.position,
    scale: {x:-1.12,y:2.00,z:1},
    rotation: t.rotation
  })
  MeshRenderer.setPlane(screen)
  
  VideoPlayer.create(screen, {
    src: url,
    playing: false,
  })
  
  // #3
  const videoTexture = Material.Texture.Video({ videoPlayerEntity: screen })
  
  // #4
  Material.setPbrMaterial(screen, {
    texture: videoTexture,
    roughness: 1.0,
    specularIntensity: 0,
    metallic: 0,
  })
  videos.push(screen)

  // utils.triggers.addTrigger(
  //   triggerBox,
  //   utils.NO_LAYERS,
  //   utils.LAYER_1,
  //   [{ type: 'box' }],
  //   function (otherEntity) {
  //     console.log(`triggered by ${otherEntity}!`)
  //     const videoPlayer = VideoPlayer.getMutable(screen)
  //     videoPlayer.playing = true
  //   }, function(){
  //     console.log(`uscito!`)
  //     const videoPlayer = VideoPlayer.getMutable(screen)
  //     videoPlayer.playing = false
  //     videoPlayer.position = 0
  //   }
  // )
//  engine.addSystem(() => {

//   const playerPosition = Transform.getOrNull(engine.PlayerEntity)
//   if (playerPosition) {
//     let p = t.parent
//     if(p){
//     const transformP = Transform.get(p)
//     const dist = Vector3.distanceSquared(transformP.position, playerPosition.position)
//     if (dist > 2) {
      
//       const videoPlayer = VideoPlayer.getMutable(screen)
//       videoPlayer.playing = false
//     }
//     }
//   }
//   })

}

function videoroof(){

  var url = "http://www.keiron.fit/ArcadeSophia/Deus_Tempora_Intro.webm"
  const screenVideo = engine.getEntityOrNullByName("videoroof")
  if(screenVideo){
  const screen = engine.addEntity()
  var t = Transform.get(screenVideo)
  
  Transform.create(screen, {
    parent: t.parent,
    position: t.position,
    scale: {x:-7.2,y:4.05,z:1},
    rotation: t.rotation
  })
  MeshRenderer.setPlane(screen)

  VideoPlayer.create(screen, {
  src: url,
  playing: false,
  })

  // #3
  const videoTexture = Material.Texture.Video({ videoPlayerEntity: screen })

  // #4
  Material.setPbrMaterial(screen, {
  texture: videoTexture,
  roughness: 1.0,
  specularIntensity: 0,
  metallic: 0,
  })


  const evento1 = engine.getEntityOrNullByName('evento1')
  const evento2 = engine.getEntityOrNullByName('evento2')
  const evento3 = engine.getEntityOrNullByName('evento3')
  const evento4 = engine.getEntityOrNullByName('evento4')
  const evento5 = engine.getEntityOrNullByName('evento5')

  if(!evento1||!evento2||!evento3||!evento4||!evento5)return
  pointerEventsSystem.onPointerDown(
    { entity: evento1, opts: { button: InputAction.IA_POINTER, hoverText: 'Evento 1' } },
    () => {
      url = "http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4"
      const videoPlayer = VideoPlayer.getMutable(screen)
              videoPlayer.src = url
              videoPlayer.position = 0
              videoPlayer.playing = true
    }
  )

  
  pointerEventsSystem.onPointerDown(
    { entity: evento2, opts: { button: InputAction.IA_POINTER, hoverText: 'Evento 2' } },
    () => {
      url = "http://www.keiron.fit/ArcadeSophia/Deus_Tempora_Intro.webm"
      const videoPlayer = VideoPlayer.getMutable(screen)
              videoPlayer.src = url
              videoPlayer.position = 0
              videoPlayer.playing = true
    }
  )

  pointerEventsSystem.onPointerDown(
    { entity: evento2, opts: { button: InputAction.IA_POINTER, hoverText: 'Evento 3' } },
    () => {
      url = "http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4"
      const videoPlayer = VideoPlayer.getMutable(screen)
              videoPlayer.src = url
              videoPlayer.position = 0
              videoPlayer.playing = true
    }
  )

  pointerEventsSystem.onPointerDown(
    { entity: evento2, opts: { button: InputAction.IA_POINTER, hoverText: 'Evento 4' } },
    () => {
      url = "http://www.keiron.fit/ArcadeSophia/Deus_Tempora_Intro.webm"
      const videoPlayer = VideoPlayer.getMutable(screen)
              videoPlayer.src = url
              videoPlayer.position = 0
              videoPlayer.playing = true
    }
  )

  pointerEventsSystem.onPointerDown(
    { entity: evento2, opts: { button: InputAction.IA_POINTER, hoverText: 'Evento 5' } },
    () => {
      url = "http://www.keiron.fit/MetaversoGlo/VideoGloTest.mp4"
      const videoPlayer = VideoPlayer.getMutable(screen)
              videoPlayer.src = url
              videoPlayer.position = 0
              videoPlayer.playing = true
    }
  )

  engine.addSystem(() => {
    const playerPosition = Transform.get(engine.PlayerEntity)
  
    const p1 = Transform.get(evento1)
    const d1 = Vector3.distanceSquared(p1.position, playerPosition.position)
    const p2 = Transform.get(evento2)
    const d2 = Vector3.distanceSquared(p2.position, playerPosition.position)
    if (d1 > 21 && d2 > 21) {
      const videoPlayer = VideoPlayer.getMutable(screen)
      videoPlayer.playing = false
    }
    })

    
  
  
  }
}