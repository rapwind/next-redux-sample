// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import Head from "next/head";
import SampleDetailTemplate from "~/components/templates/SampleDetail";
import { fetchSampleAction } from "~/features/sample/sampleSlice";
import store from "~/features/store";
import SampleEntity from "~/entities/SampleEntity";

type PageProps = {
  data: SampleEntity;
  loadingFetchError: boolean;
};

// SSR
export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
): Promise<GetServerSidePropsResult<PageProps>> => {
  const id = context.params.sampleId as string;
  await store.dispatch(fetchSampleAction({ id }));
  const { data, loadingFetchError } = store.getState().sample;
  return {
    props: {
      data,
      loadingFetchError,
    },
  };
};

const SampleById: FC<PageProps> = (props: PageProps) => {
  return (
    <div>
      <Head>
        <title>名前: {props.data.name}</title>
      </Head>
      <SampleDetailTemplate
        error={props.loadingFetchError}
        item={props.data}
      ></SampleDetailTemplate>
    </div>
  );
};
export default SampleById;
