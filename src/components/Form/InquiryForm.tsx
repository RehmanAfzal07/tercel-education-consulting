'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  desireCountry: z.string().min(2, 'Select a country'),
  phone: z.string().min(10, 'Enter valid phone number'),
  educationLevel: z.string().min(2, 'Enter your education level'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const InquiryForm = ({ closeForm }: { closeForm: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Form Submitted:', data);
    alert('Thank you for your inquiry!');
    closeForm(); // Go back to home
  };

  return (
    <div className="fixed inset-0 z-40 bg-zinc-100 py-6 px-4 sm:px-6 flex justify-center items-start overflow-auto">
  <button
    onClick={closeForm}
    className="absolute top-6 left-4 text-gray-700 hover:text-red-500 z-50 font-medium"
  >
    ← Back to Home
  </button>

  <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-md border border-gray-200 p-6 md:p-10 gap-6">
 
    <div className="w-full md:w-1/2 bg-zinc-100 p-3 shadow-2xl">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
        Start Your Journey
      </h2>
      <p className="text-gray-500 mb-6">
        Fill out the form below and one of our consultants will contact you shortly.
      </p>

     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">

  {/* Two-column layout for the first 4 fields */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    <div>
      <label className="block font-medium text-gray-700 mb-1">Full Name</label>
      <input
        {...register('fullName')}
        className="w-full border border-gray-300 p-2 rounded bg-white"
      />
      {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
    </div>

    <div>
      <label className="block font-medium text-gray-700 mb-1">Email</label>
      <input
        type="email"
        {...register('email')}
        className="w-full border border-gray-300 p-2 rounded"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
    </div>

    <div>
      <label className="block font-medium text-gray-700 mb-1">Phone Number</label>
      <input
        type="tel"
        {...register('phone')}
        className="w-full border border-gray-300 p-2 rounded"
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
    </div>

    <div>
      <label className="block font-medium text-gray-700 mb-1">Desired Country</label>
      <select
        {...register('desireCountry')}
        className="w-full border border-gray-300 p-2 rounded bg-white"
      >
        <option value="">Select a country</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="Australia">Australia</option>
        <option value="Germany">Germany</option>
        <option value="United Kingdom">United Kingdom</option>
      </select>
      {errors.desireCountry && (
        <p className="text-red-500 text-sm">{errors.desireCountry.message}</p>
      )}
    </div>
  </div>

  {/* Single-row fields */}
  <div>
    <label className="block font-medium text-gray-700 mb-1">Current Education Level</label>
    <input
      {...register('educationLevel')}
      className="w-full border border-gray-300 p-2 rounded"
    />
    {errors.educationLevel && (
      <p className="text-red-500 text-sm">{errors.educationLevel.message}</p>
    )}
  </div>

  <div>
    <label className="block font-medium text-gray-700 mb-1">Your Message</label>
    <textarea
      {...register('message')}
      rows={4}
      className="w-full border border-gray-300 p-2 rounded"
      placeholder="Tell us about your goals or questions..."
    />
    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
  </div>

  <button
    type="submit"
    className="w-full bg-gray-800 hover:bg-gray-600 text-white py-2 rounded-md font-semibold transition duration-200"
  >
    Submit Request
  </button>
</form>

    </div>

    {/* Info Section */}
    <div className="w-full md:w-1/2 bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">What Happens Next?</h2>

      <div className="space-y-4">
        <div>
          <div className="flex items-center">
            <h3 className="text-red-500 font-bold text-xl mr-3">1</h3>
            <h4 className="font-semibold text-gray-800">Initial Call</h4>
          </div>
          <p className="ml-7 text-gray-700 text-sm">
            One of our consultants will call you within 24 hours to understand your requirements.
          </p>
        </div>

        <div>
          <div className="flex items-center">
            <h3 className="text-red-500 font-bold text-xl mr-3">2</h3>
            <h4 className="font-semibold text-gray-800">Strategy Session</h4>
          </div>
          <p className="ml-7 text-gray-700 text-sm">
            Schedule a comprehensive consultation to develop your personalized education plan.
          </p>
        </div>

        <div>
          <div className="flex items-center">
            <h3 className="text-red-500 font-bold text-xl mr-3">3</h3>
            <h4 className="font-semibold text-gray-800">Begin Your Journey</h4>
          </div>
          <p className="ml-7 text-gray-700 text-sm">
            Start working with your dedicated consultant to achieve your international education goals.
          </p>
        </div>

        <div className="pt-4 border-t mt-4 text-center">
          <a
            href="/pdf/guide.pdf"
            download
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-medium transition"
          >
            Download PDF Guide
          </a>
          <p className="text-sm text-gray-600 mt-2">
            Get our comprehensive guide to top universities and admission requirements.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default InquiryForm;






















