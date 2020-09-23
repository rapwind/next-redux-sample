import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import SampleListTemplate from "~/components/templates/SampleList";
import { listSampleAction, SampleState } from "~/features/sample/sampleSlice";
import { RootState } from "~/features/store";

const Sample: FC = () => {
  const { list, loadingList, loadingListError } = useSelector<
    RootState,
    SampleState
  >((state) => state.sample);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listSampleAction());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>一覧</title>
      </Head>
      <SampleListTemplate
        loading={loadingList}
        error={loadingListError}
        items={list}
      ></SampleListTemplate>
    </div>
  );
};
export default Sample;
