// ForgetPasswordForm.js
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${USER_API_END_POINT}/forget-password`, { email });
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='font-bold text-xl mb-5'>Forget Password</h1>
      <div className='my-2'>
        <Label>Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="patel@gmail.com"
        />
      </div>
      {loading ? (
        <Button className="w-full my-4">
          <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
        </Button>
      ) : (
        <Button type="submit" className="w-full my-4">
          Send Password Reset Link
        </Button>
      )}
    </form>
  );
};

export default ForgetPasswordForm;