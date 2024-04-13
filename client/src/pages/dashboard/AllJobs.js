import { useAppContext } from '../../context/appContext';
import { JobsContainer, SearchContainer } from '../../components'
import { useEffect } from 'react';

const AllJobs = () => {
  const {getCities}= useAppContext();
  useEffect(() => {
    getCities()
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  )
}

export default AllJobs
