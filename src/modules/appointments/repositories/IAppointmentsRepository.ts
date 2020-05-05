import Appointment from '../infra/typeorm/entities/Appointments';

export default interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
}
