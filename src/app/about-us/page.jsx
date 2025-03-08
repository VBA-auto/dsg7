import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At DSG7, we are committed to providing high-quality car parts and
            accessories that keep your vehicle running at its best. Our mission
            is to deliver exceptional products and services to car enthusiasts
            and professionals alike.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="relative h-48 w-48 mx-auto mb-4">
                <Image
                  src="/images/team.jpg" // Replace with team member image
                  alt="Team Member 1"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="relative h-48 w-48 mx-auto mb-4">
                <Image
                  src="/images/team.jpg" // Replace with team member image
                  alt="Team Member 2"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="relative h-48 w-48 mx-auto mb-4">
                <Image
                  src="/images/team.jpg" // Replace with team member image
                  alt="Team Member 3"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Mike Johnson
              </h3>
              <p className="text-gray-600">Lead Engineer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Value 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Quality
            </h3>
            <p className="text-gray-600">
              We prioritize quality in every product we offer.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Innovation
            </h3>
            <p className="text-gray-600">
              We embrace innovation to deliver cutting-edge solutions.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer Focus
            </h3>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do.
            </p>
          </div>

          {/* Value 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Integrity
            </h3>
            <p className="text-gray-600">
              We operate with honesty and transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
