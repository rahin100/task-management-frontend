import { Link } from "react-router-dom";
import Container from "../Container/Container";

const DevelopersSection = () => {
  return (
    <Container>
      <div className="bg-gray-100 p-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-8">
            Developers Love Our Website!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Easy Task Management
              </h3>
              <p className="text-gray-700">
                Streamline your workflow with our intuitive task management
                system. Organize, edit, and delete tasks effortlessly.
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Drag and Drop Functionality
              </h3>
              <p className="text-gray-700">
                Take advantage of drag-and-drop functionality for seamless task
                prioritization and reordering.
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Collaborate Efficiently
              </h3>
              <p className="text-gray-700">
                Collaborate with your team by sharing tasks and keeping everyone
                on the same page. Real-time updates ensure smooth collaboration.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-800">
              Join thousands of developers who are already benefiting from our
              platform. Get started today!
            </p>
            <Link to="/signup">
            <button className="btn btn-warning text-white mt-4">Sign Up Now</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DevelopersSection;
