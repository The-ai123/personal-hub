import './OpenGLPage.css'
import { FaGithub } from "react-icons/fa";

function OpenGLPage() {

    return (
      <>
        <a href="https://github.com/The-ai123/cubeworld"><FaGithub/>GitHub Repository</a>
        <center><h1>Non-Euclidean OpenGL Exploration</h1></center>
        <h2>Goal</h2>
        <p>The broad goal of this project was to get a foothold into understanding OpenGL, with the end goal of non-euclidean rendering to provide some direction I wanted to go. 
          The reason I wanted to learn OpenGL is primarily because of compute shaders, but I also enjoy the low level programming involved. The interesting non-euclidean rendering is because I find it fun
          to imagine these impossible worlds and I definitely feel like this fascinating topic is under represented.
        </p>

        <h2>Concepts</h2>
        <h3>OpenGL</h3>
        <p>OpenGL, which stands for open graphics library is 
        <a href="https://www.khronos.org/opengl/"> "the most widely adopted 2D and 3D graphics API in the industry, bringing thousands of applications to a wide variety of computer platforms." </a> 
         For my purposes, it's a tool that lets me run code on my graphics card, which can be much faster than on a CPU in some cases.
        The reductive reason for this is because a graphics card is specialized for doing many calculations in parallel compared to that of a CPU.
        The drawback is that <i>only</i> tasks that can be run in parallel benefit from this. For pixels on a screen, or particles in a 
        simulation, this approach is perfect. However, for most processes on a computer, the order of execution matters making parallelization
        impossible.
        </p>
        <h3>Non-Euclidean</h3>
        <p>Euclidean geometry is the geometry that we experience day to day. The rules for this are defined by Euclid's Postulates. These are:</p>
        <ol>
          <li>A straight line segment can be drawn joining any two points.</li>
          <li>Any straight line segment can be extended indefinitely in a straight line.</li>
          <li>Given any straight lines segment, a circle can be drawn having the segment as radius and one endpoint as center.</li>
          <li>All Right Angles are congruent.</li>
          <li>If two lines are drawn which intersect a third in such a way that the sum of the inner angles on one side is less than two Right Angles, then the two lines inevitably must intersect each other on that side if extended far enough.</li>
        </ol>
        <p>These are a bit wordy, but all they do is describe 'normal' geometry. Non-Euclidean geometry is any geometry that breaks one or more of these rules. 
        </p>

        <p>A side note about this, is that we actually <i>do</i> live in a non-euclidean universe, however this is only noticeable
        on large scales or at extreme regions. This aspect of our universe is what causes gravity. For example, because space is curved two parallel light
        rays will actually intersect in regions of intense gravity such as black holes.</p>

        <h2>Process</h2>
        <h3>Part One: Early Experimentation</h3>
        <p>I spent a lot of time at first just watching hours of content before actually going in to follow a tutorial (<a href="https://www.youtube.com/watch?v=Q7vm264YNrM&list=PLvv0ScY6vfd9zlZkIIqGDeG5TUWswkMox&ab_channel=MikeShah">Mike Shah</a> has a great youtube playlist). I personally find that more useful than jumping 
          in to a tutorial I don't understand and just copy and pasting some random code into visual studio. Throughout the project I was trying to figure out what kind of geometry would actually be possible to render. 
          As I actually learned how the pipeline worked and what could be done with openGL I settled on a fairly simple, but still technically non-euclidean. This would be having the world split in two, with the size of one 
          unit being twice as big on one side than the other. </p>
          <table>
          <thead><tr><th></th><th></th></tr></thead>
          <tbody>
            <tr>
              <td class="video">
                <p>Created a Cube</p>
                <video width="250px" controls><source src="./Videos/cube.mp4" type="video/mp4"/></video>
              </td>
              <td class="videoDescription">
                <p>The first step to making something more complex is to start simple.</p>
                <p>The video shows a simple cube rendered using 6 vertices.</p>
                <p>There is a shader that takes in a time input and offsets the vertices positions accordingly.</p>
                <p>Something to note is that the 'shading' is fake. No lighting is being calculated,
                  all it is, is one one side of the cube is white and the other is black. This just makes it easier
                  to look at.
                </p>
              </td>
            </tr>
            <tr>
              <td class="video">
                <p>Allowed for Camera Movement</p>
                <video width="250px" controls><source src="./Videos/movement.mp4" type="video/mp4"/></video>
              </td>
              <td class="videoDescription">
                <p>Camera Movement is done using uniforms. These are a type of global variable for all vertices.
                  In the shader each vertex is offset by the camera position values. This means that the camera
                  is not moving, but the entire world around it, at least from a coding perspective.
                </p>
              </td>
            </tr>
            <tr>
              <td class="video">
                <p>Allowed for Camera Turning</p>
                <video width="250px" controls><source src="./Videos/turning.mp4" type="video/mp4"/></video>
              </td>
              <td class="videoDescription">
                <p>Turning the camera, while not extremely difficult, is a noteworthy step up from simple cardinal 
                  movement. The formula for rotating a point in 2D is shown below. For now only rotation in the XZ
                  plane is available.
                </p>
                <center><a href="https://academo.org/demos/rotation-about-point/"><img src="./Images/rotatePoint.png"></img></a></center>
                <p>Currently movement and camera turning is down exclusively using the keyboard. A future
                  goal of the project is to implement mouse control over the camera.
                </p>
              </td>
            </tr>
            <tr>
              <td class="video">
                <p>Created Non-<a class="normaltexta" href="https://www.letpub.com/author_education_Title_Capitalization_and_You#:~:text=If%20you%20are%20using%20title,%2C%20preposition%2C%20or%20coordinating%20conjunction.">e</a>uclidean Geometry</p>
                <video width="250px" controls><source src="./Videos/noneuclidean.mp4" type="video/mp4"/></video>
              </td>
              <td class="videoDescription">
                <p>This is a basic attempt at the previously discussed non-euclidean geometry.</p>
              </td>
            </tr>
            <tr>
              <td class="video">
                <p>Created Simple Lighting</p>
                <video width="250px" controls><source src="./Videos/lighting.mp4" type="video/mp4"/></video>
              </td>
              <td class="videoDescription">
                <p>This was a jab at creating lighting. All it does is divide the brightness by distance to center. 
                  As a result the lighting doesn't look very realistic. In the future this would be completely re-worked.
                </p>
              </td>
            </tr>
          </tbody></table>
        <h3>Part Two: Creating a World</h3>
      </>
    )
  }
  
  export default OpenGLPage
  