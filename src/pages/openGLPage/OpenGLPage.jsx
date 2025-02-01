import './OpenGLPage.css';
import { FaGithub } from "react-icons/fa";

function OpenGLPage() {
    return (
        <>
            <div className="defaultBackground"></div>
            <a href="https://github.com/The-ai123/cubeworld" className="githubLink">
                <FaGithub /> GitHub Repository
            </a>
            <center><h1>Non-Euclidean OpenGL Exploration</h1></center>

            <h2>Goal</h2>
            <p>
                The broad goal of this project was to get a foothold into understanding OpenGL, with the end goal of non-euclidean rendering. 
                I wanted to learn OpenGL because of compute shaders and the low-level programming involved. Non-euclidean rendering fascinated 
                me as it challenges conventional geometry and creates imaginative, impossible worlds.
            </p>

            <h2>Concepts</h2>
            <div className="conceptContainer">
                <div className="conceptBox">
                    <h3>OpenGL</h3>
                    <p>
                        OpenGL, short for Open Graphics Library, is 
                        <a href="https://www.khronos.org/opengl/"> the most widely adopted 2D and 3D graphics API </a> in the industry. 
                        It allows code to run on the GPU for tasks like rendering pixels or simulating particles.
                    </p>
                </div>
                
                <div className="conceptBox">
                    <h3>Non-Euclidean Geometry</h3>
                    <p>
                        Euclidean geometry governs everyday spatial rules. Non-euclidean geometry breaks these norms, 
                        creating intriguing environments where our typical sense of space doesn’t apply.
                    </p>
                </div>
            </div>

            <h2>Process</h2>
            <h3>Part One: Early Experimentation</h3>

            <div className="videoGrid">
                <div className="videoCard">
                    <video controls>
                        <source src="./Videos/cube.mp4" type="video/mp4" />
                    </video>
                    <div className="videoDescription">
                        <p>Created a Cube: The first step was rendering a simple cube using 6 vertices. The `shading` is fake—each side is manually colored for clarity.</p>
                    </div>
                </div>

                <div className="videoCard">
                    <video controls>
                        <source src="./Videos/movement.mp4" type="video/mp4" />
                    </video>
                    <div className="videoDescription">
                        <p>Allowed for Camera Movement: Implemented camera movement by offsetting vertex positions instead of moving the actual camera.</p>
                    </div>
                </div>

                <div className="videoCard">
                    <video controls>
                        <source src="./Videos/turning.mp4" type="video/mp4" />
                    </video>
                    <div className="videoDescription">
                        <p>Camera Turning: Implemented 2D rotation for XZ-plane movement using trigonometric transformations.</p>
                    </div>
                </div>

                <div className="videoCard">
                    <video controls>
                        <source src="./Videos/noneuclidean.mp4" type="video/mp4" />
                    </video>
                    <div className="videoDescription">
                        <p>Created Non-Euclidean Geometry: Implemented non-euclidean geometry by scaling regions differently.</p>
                    </div>
                </div>

                <div className="videoCard">
                    <video controls>
                        <source src="./Videos/lighting.mp4" type="video/mp4" />
                    </video>
                    <div className="videoDescription">
                        <p>Simple Lighting: Created basic lighting that scales inversely with distance, though it`s not yet realistic.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OpenGLPage;
