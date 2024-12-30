<!--

! LEARNING GSPA IN REACT
* it is a javascript library for animation
* install -> npm install @gsap/react gsap

USAGE
* inorder to use we need to import it and use it like useffect hook. the hook of gsap is called useGSAP hook

useGSAP(()=> {
}, {dependencies: [dep1, dep2], revertOnUpdate: true})


* contextsafe use garna sakincha if want to handle the animation when something is clicked
* class wa ref pani use garna sakincha li.e gspa.to('.classname', {rotation: 180}) or gsap.to(refname.current, {propertis for animation})


! Timeline - gsap.timeline({}) : timeline allow more precisely to create a trigger start and end tyo about section ma vayeko jasto (zentry gsap project)

* bascially timeline acts as a container for tweens and other timelines, making it simple to control them as a whole and precisely manage their timing. timeline define garyo vane tesma aru add garna milcha ra one by one tini haru execute huncha. like below example scroll ma paila green - red - blue esari execute hudai cha cz they are contained one timeline
const tl = gsap.timeline({
scrollTrigger: {....}})

tl.to('.greenbox', {..})
tl.to('.redbox', {..})
tl.to('.bluebox', {..})

* scrub: jun scrollTrigger : {} bhitra lekhincha tesle chai how are we moving through animation on scroll vanne janaune ho. important things is scroll agadhi paxadi jada garda ni tei anusar animation hunalai scrub : true lekhincha tara smooth banaunalai hami value ni dina sakcha. like kunai div ma animation cha ani scrollforward garda tesko animation dekhincha vane scroll back garda feri tesko beginning state tira janu paryo ho for that scrub is needed. example home animation of zentry.

* gsap.set("#idname", {...}), creates twin with no direction . tweens -> to, from, fromto


 -->

<!--
! GSAP TWEENS : from, to, formto

 !from -> yo vaneko chai back state bata normal aile ko state aau vaneko
gsap.from(".class", { opacity: 0, y: 100, duration: 1 });

for example : yo mathi ko gsap.from le k vancha vanesi
animate ".class" from an opacity of 0 and a y position of 100 (like transform: translateY(100px))
 to the current values (an opacity of 1 and y position of 0).

! to: it allows you to define the destination value, like animate to this state vaneko jasto
gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
 rotate and move elements with a class of "box"
 ("x" is a shortcut for a translateX() transform) over the course of 1 second.

! fromto: it includes both from this state - to this state
animate ".box" from an opacity of 0 to an opacity of 0.5
gsap.fromTo(".box", { opacity: 0 }, { opacity: 0.5, duration: 1 });

! start("top top") -> meaning aniamtion start when trigger element's top reaches the viewport top
! end("+=800 bottom") -> meaning, animation ends when scroll 800px from bottom as here reference point for end position is 'bottom of the viewport' . in general esle chai diyeko ending reference k cha tesko position ma 800 add garcha ani end huncha vaneko. The animation ends when the bottom of the viewport (bottom) has moved 800 pixels past its initial position relative to the trigger.
When You Scroll 800 Pixels (+=800):

The animation ends when the bottom of the viewport has moved 800 pixels beyond its starting position.
In this case, the animation ends when the scroll position reaches: 1000px (bottom of viewport) + 800px = 1800px.

The +=800 means the animation will continue until the bottom of the viewport has moved 800 pixels down from its original position.
 -->

<!--
! CONTEXT -> gsap.context() : it collects all the gsap animation and scrolltriggers that are created with the supplied function so that they can be revert or kill at once

! context should always be cleared with revert method
 -->
