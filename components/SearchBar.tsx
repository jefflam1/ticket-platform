import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import Form from 'next/form';

const SearchBar = () => {
  return (
    <div>
      <Form action={'/search'} className='relative'>
        <Input
          name='q'
          type='text'
          placeholder='Search for events...'
          className='w-full h-12 py-3 px-4 pl-12 bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:!ring-2 focus:!ring-primary-500 focus:border-transparent transition-all duration-200'
        />
        <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5' />
        <Button className='absolute right-3 top-1/2 -translate-y-1/2 bg-primary-500 text-white hover:bg-primary-300 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200'>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
