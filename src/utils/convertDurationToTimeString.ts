export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600 );
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  // padStart faz com que se o resultado tiver só um caractere ele coloca um 0 na frente, ou seja, se retornar hours = 1, ele fará com que hours = 01
  const timeString = [hours, minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':');

  return timeString;
}