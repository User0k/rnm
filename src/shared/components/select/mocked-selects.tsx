import Select from '.';

export function MockedSelectLarge() {
  return (
    <Select
      options={[
        { label: 'Human', value: 'human' },
        { label: 'Alien', value: 'alien' },
        { label: 'Humanoid', value: 'humanoid' },
        { label: 'Animal', value: 'animal' },
        { label: 'Robot', value: 'robot' },
      ]}
      placeholder='Species'
    />
  );
}

export function MockedSelectSmall() {
  const colors = ['#12B800', '#DF0000', '#FF9900'];

  const options = [
    { label: 'Alive', value: 'alive' },
    { label: 'Dead', value: 'dead' },
    { label: 'Unknown', value: 'unknown' },
  ].map((option, i) => ({
    value: option.value,
    label: (
      <p style={{ display: 'flex', alignItems: 'center', columnGap: 8 }}>
        {option.label}
        <span
          style={{
            width: 10,
            height: 10,
            marginLeft: 2,
            borderRadius: '100%',
            backgroundColor: colors[i],
          }}
        ></span>
      </p>
    ),
  }));

  return (
    <Select
      options={options}
      placeholder={options[0].label}
      size='small'
    />
  );
}
